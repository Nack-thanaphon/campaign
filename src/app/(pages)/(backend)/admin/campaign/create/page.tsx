import React from 'react';
import Register from '@/shared/components/Register';
import BackTo from '@/shared/components/BackTo';


const Page = () => {
  return (
    <div className=' flex flex-col'>
      <div className='h-full w-full bg-white rounded-[10px] p-3 flex-1'>
        <BackTo to={'/admin'} />
        <div className="flex-1 overflow-hidden">
          <div className="my-4 text-center">
            <p className='text-2xl'>ลงทะเบียนร้าน</p>
          </div>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Page;