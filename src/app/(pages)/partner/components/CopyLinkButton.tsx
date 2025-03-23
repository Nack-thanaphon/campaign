"use client";

import React from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyLinkButton = () => {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('คัดลอกลิงค์สำเร็จ!');
  };

  return (
    <button onClick={copyLink} className='bg-gray-200 rounded-[10px] p-2 flex items-center w-fit text-nowrap'>
      <FaCopy className="text-gray-600" />
      คัดลอกลิงก์
    </button>
  );
};

export default CopyLinkButton;