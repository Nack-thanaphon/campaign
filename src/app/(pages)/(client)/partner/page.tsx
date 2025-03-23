import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="mb-3">
                <h1 className='text-[2rem]'>วิธีการใช้งาน</h1>
            </div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/yV0OQowKdaU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='w-fit lg:w-[800px] lg:h-[500px] h-[300px] rounded-lg shadow-lg'
            ></iframe>
        </div>
    );
};

export default page;