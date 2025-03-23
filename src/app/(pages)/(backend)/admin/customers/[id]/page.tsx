"use client"
import React, { useEffect } from 'react';
import Register from '@/shared/components/Register';
import BackTo from '@/shared/components/BackTo';
import { useParams } from 'next/navigation';
import { getProfileById } from '@/shared/services/superbase.service';
import { useProfileStore } from '@/app/store/profile.store';

const Page = () => {
  const params = useParams();
  const id = params?.id as string;

  const { setProfile } = useProfileStore((state) => state);

  useEffect(() => {
    const fetchProfile = async () => {
      if (id) {
        const { data, error } = await getProfileById(Number(id));
        if (data) {
          setProfile(data);
        }
      }
    };
    fetchProfile();
  }, [id]);


  return (
    <div className='flex flex-col'>
      <div className='h-full w-full bg-white rounded-[10px] p-3 flex-1'>
        <BackTo to={'/admin'} />
        <div className="flex-1 overflow-hidden">
          <div className="my-4 text-center">
            <p className='text-2xl'>แก้ไขทะเบียนร้าน</p>
          </div>
          <Register id={Number(id)} />
        </div>
      </div>
    </div>
  );
};

export default Page;