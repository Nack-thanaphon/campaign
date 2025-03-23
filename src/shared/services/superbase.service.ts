import supabase from "@/config/superbase.config";

// Base Profile interface for input
interface ProfileInput {
  id?: number;  // Make ID optional for creation
  profile_name: string;
  details: string;
  address: string;
  type: number;
  phone: string;
  review_url: string;
  is_review_redirect: boolean;
  slug: string;
  website: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  email?: string;
}


// Complete Profile data structure from database
export interface ProfileData {
  id: number;
  profile_name: string;
  details: string;
  review_url: string;
  youtube_url: string;
  tiktok_url: string;
  logo: string;
  phone: string;
  email: string;
  website: string;
  is_review_redirect: boolean;
  is_menu: boolean;
  is_deliverly: boolean; // Note: might be typo, should be "is_delivery"?
  menu: {
    name: string;
    image: string;
    price: string;
  }[];
  map_url: string;
  instagram_url: string;
  facebook_url: string;
  line_url: string;
  photo: string;
  slug: string;
  address: string;
  time: string;
  type: string;
  location: string;
  business_type: string;
  reviews: string[];
  created_at: string;
  updated_at: string;
}

// Pagination parameters
interface PaginationParams {
  page: number;
  limit: number;
  filter?: string;
}

// Paginated response structure
interface PaginatedResponse<T> {
  data: T[];
  total: number;
  error: Error | null;
}

// Generic Supabase response
interface SupabaseResponse<T> {
  data: T | null;
  error: Error | null;
}

/**
 * Creates a new business profile
 * @param profile Profile data to create
 * @returns Created profile data or error
 */

const createProfile = async (profile: ProfileInput): Promise<SupabaseResponse<ProfileData>> => {
  try {
    // Get the current maximum ID
    const { data: maxIdResult } = await supabase
      .from('business_profiles')
      .select('id')
      .order('id', { ascending: false })
      .limit(1);

    const nextId = maxIdResult && maxIdResult[0] ? maxIdResult[0].id + 1 : 1;

    const { data, error } = await supabase
      .from('business_profiles')
      .insert({
        id: nextId,  // Explicitly set the ID
        ...profile,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return { data: data as ProfileData, error: null };
  } catch (error) {
    console.error('Error creating profile:', error);
    return { data: null, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

/**
 * Updates an existing business profile
 * @param id Profile ID to update
 * @param profile Updated profile data
 * @returns Updated profile data or error
 */
const updateProfile = async (id: number, profile: ProfileInput): Promise<SupabaseResponse<ProfileData>> => {
  try {
    console.log('website >>>', profile)
    const { data, error } = await supabase
      .from('business_profiles')
      .update({
        ...profile,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data: data as ProfileData, error: null };
  } catch (error) {
    console.error('Error updating profile:', error);
    return { data: null, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

/**
 * Fetches all profiles without pagination
 * @returns Array of profiles or error
 */
const getAllProfiles = async (): Promise<SupabaseResponse<ProfileData[]>> => {
  try {
    const { data, error } = await supabase
      .from('business_profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data: data as ProfileData[], error: null };
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return { data: null, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};


const getAllProfilesType = async (): Promise<SupabaseResponse<any[]>> => {
  try {
    const { data, error } = await supabase
      .from('business_type')
      .select('*')
    if (error) throw error;
    return { data: data as any[], error: null };
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return { data: null, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

const getTotalProfilesCount = async (): Promise<SupabaseResponse<number>> => {
  try {
    const { count, error } = await supabase
      .from('business_profiles')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;
    return { data: count || 0, error: null };
  } catch (error) {
    console.error('Error fetching total profiles count:', error);
    return { data: 0, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

/**
 * Fetches profiles with pagination and filtering
 * @param params Pagination and filter parameters
 * @returns Paginated profile data
 */
const getAll = async ({ page, limit, filter }: PaginationParams): Promise<PaginatedResponse<ProfileData>> => {
  try {
    const offset = (page - 1) * limit;
    let query = supabase
      .from('business_profiles')
      .select(`
        *,
        business_type:type (id, name)
      `, { count: 'exact' })
      .order('id', { ascending: false })
      .range(offset, offset + limit - 1);

    if (filter) {
      query = query.or(`profile_name.ilike.%${filter}%,details.ilike.%${filter}%`);
    }

    const { data, error, count } = await query;

    if (error) throw error;

    return {
      data: (data as ProfileData[]) || [],
      total: count || 0,
      error: null
    };
  } catch (error) {
    console.error('Error fetching paginated profiles:', error);
    return {
      data: [],
      total: 0,
      error: error instanceof Error ? error : new Error('Unknown error')
    };
  }
};

const getAllPromote = async (): Promise<ProfileData[]> => {
  try {
    let query = supabase
      .from('business_profiles')
      .select(`
        *,
        business_type:type (id, name)
      `, { count: 'exact' })
      .order('id', { ascending: false })

    const { data, error, count } = await query;

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching paginated profiles:', error);
    return [];
  }
};


/**
 * Fetches a single profile by slug
 * @param slug Profile slug
 * @returns Profile data with business type or error
 */
const getProfileBySlug = async (slug: string): Promise<SupabaseResponse<ProfileData & { business_type: { id: number; name: string } }>> => {
  try {
    const { data, error } = await supabase
      .from('business_profiles')
      .select(`
        *,
        business_type:type (id, name)
      `)
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return { data: data as ProfileData & { business_type: { id: number; name: string } }, error: null };
  } catch (error) {
    console.error('Error fetching profile by slug:', error);
    return { data: null, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

const getProfileById = async (id: number): Promise<SupabaseResponse<ProfileData & { business_type: { id: number; name: string } }>> => {
  try {
    const { data, error } = await supabase
      .from('business_profiles')
      .select(`
        *,
        business_type:type (id, name)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data: data as ProfileData & { business_type: { id: number; name: string } }, error: null };
  } catch (error) {
    console.error('Error fetching profile by slug:', error);
    return { data: null, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

/**
 * Deletes a profile by ID
 * @param id Profile ID to delete
 * @returns Success status or error
 */
const deleteProfile = async (id: number): Promise<SupabaseResponse<null>> => {
  try {
    const { error } = await supabase
      .from('business_profiles')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { data: null, error: null };
  } catch (error) {
    console.error('Error deleting profile:', error);
    return { data: null, error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

export {
  getTotalProfilesCount,
  createProfile,
  updateProfile,
  getAllProfiles,
  getAllPromote,
  getAllProfilesType,
  getAll,
  getProfileBySlug,
  getProfileById,
  deleteProfile
};