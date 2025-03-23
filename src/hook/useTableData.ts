import supabase from "@/config/superbase.config";
import { createProfile, getAll, getAllProfiles, ProfileData, updateProfile } from "@/shared/services/superbase.service";
import { useState, useEffect, useCallback } from "react";

interface Pagination {
  page: number;
  limit: number;
  total: number;
}

interface TableData<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  filter: string;
  pagination: Pagination;
  setFilter: (filter: string) => void;
  setPagination: (pagination: Partial<Pagination>) => void;
  addData: (newItem: T) => Promise<void>;
  updateData: (id: number, updatedItem: T) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
  getOneData: (id: number) => Promise<T>;
}

// Note: We won't need the endpoint parameter since we're using getAllProfiles
export const useTableData = <T extends ProfileData>(): TableData<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 5,
    total: 0
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Use getAll instead of getAllProfiles for pagination support
      const response = await getAll({
        page: pagination.page,
        limit: pagination.limit,
        filter: filter
      }) as PaginatedResponse<T>; // Type assertion or adjust getAll

      if (response.error) {
        throw response.error;
      }

      setData(response.data);
      setPagination(prev => ({ ...prev, total: response.total }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      console.error("Error fetching data:", message);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, filter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // These methods would need to be implemented with Supabase calls
  const addData = async (newItem: T): Promise<void> => {
    setLoading(true);
    try {
      // You'll need to import and use createProfile from your Supabase service
      // This is a placeholder - replace with actual implementation
      // await createProfile({
      //   profile_name: newItem.profile_name,
      //   details: newItem.details,
      //   reviewUrl: newItem.review_url,
      //   youtubeUrl: newItem.youtube_url,
      //   tiktokUrl: newItem.tiktok_url,
      //   phone: newItem.phone,
      //   email: newItem.email,
      //   website: newItem.website
      // });
      await fetchData();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (id: number, updatedItem: T): Promise<void> => {
    setLoading(true);
    try {
      // You'll need to import and use updateProfile from your Supabase service
      // await updateProfile(id, {
      //   profile_name: updatedItem.profile_name,
      //   details: updatedItem.details,
      //   reviewUrl: updatedItem.review_url,
      //   youtubeUrl: updatedItem.youtube_url,
      //   tiktokUrl: updatedItem.tiktok_url,
      //   phone: updatedItem.phone,
      //   email: updatedItem.email,
      //   website: updatedItem.website
      // });
      await fetchData();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      // Add Supabase delete implementation
      await supabase
        .from('business_profiles')
        .delete()
        .eq('id', id);
      await fetchData();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getOneData = async (id: number): Promise<T> => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as T;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    filter,
    pagination,
    setFilter,
    setPagination: (newPagination: Partial<Pagination>) =>
      setPagination(prev => ({ ...prev, ...newPagination })),
    addData,
    updateData,
    getOneData,
    deleteData
  };
};