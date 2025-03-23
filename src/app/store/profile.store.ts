import { create } from 'zustand';

interface ProfileState {
  profile: {
    profile_name: string;
    details: string;
    review_url: string;
    youtube_url: string;
    tiktok_url: string;
    phone: string;
    email: string;
    website: string;
    is_review_redirect: boolean;
    address: string;
    slug: string;
    type: number;
    timezone?: string;
    start_time?: string;
    end_time?: string;
    is_menu: boolean;
    is_delivery: boolean;
    logo: string;
    time: string;
  };
  setProfile: (profile: any) => void;
  getProfile: () => any;
  clearProfile: () => void;
}


const initialProfile = {
  profile: {
    profile_name: '',
    details: '',
    review_url: '',
    youtube_url: '',
    tiktok_url: '',
    phone: '',
    email: '',
    website: '',
    is_review_redirect: false,
    address: '',
    type: 1,
    timezone: '',
    is_menu: false,
    is_delivery: false,
    logo: '',
    time: '',
    slug: '',
  },
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  profile: {
    profile_name: '',
    details: '',
    review_url: '',
    youtube_url: '',
    tiktok_url: '',
    phone: '',
    email: '',
    website: '',
    is_review_redirect: false,
    address: '',
    type: 1,
    timezone: '',
    is_menu: false,
    is_delivery: false,
    logo: '',
    time: '',
    slug: '',
  },
  setProfile: (profile) => set({ profile }),
  getProfile: () => get().profile,
  clearProfile: () => set({ profile: initialProfile.profile }),

}));