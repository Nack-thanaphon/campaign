"use client";
import React from 'react';
import CustomerTable from './components/customer.table';

const page = () => {
  return (
    <div className='h-full bg-white rounded-[10px] p-3 flex-1'>
      <div className="my-3">
        <p className='w-fit py-3 '>แดชบอร์ด</p>
      </div>
      {/* <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-blue-400 p-3 py-5 rounded-sm w-full">
          <div className="text-xs text-white">ลูกค้าทั้งหมด</div>
          <div className="text-5xl font-bold text-white mt-1">5</div>
        </div>
        <div className="bg-blue-700 p-3 py-5 rounded-sm w-full">
          <div className="text-xs text-white">ยอดขาย</div>
          <div className="text-5xl font-bold text-white mt-1">5900</div>
        </div>
 
      </div> */}
      <CustomerTable />
    </div>
  );
};

export default page;