"use client";

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Page = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/admin");
        }
    }, [status, router]);

    const handleSignIn = () => {
        signIn('google', { callbackUrl: '/' });
    };

    return (
        <div className='max-w-7xl mx-auto p-4'>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="mb-5 text-center">
                    <h1 className='text-3xl font-bold '>campaign</h1>
                    <small className='text-slate-500'>Sign In  Or <a href="">Register</a></small>
                </div>
                <div className="space-y-2">
                <Image
                    onClick={handleSignIn}
                    className='cursor-pointer rounded-[10px]'
                    src="/google_logo.png" alt="alt" width={250} height={250} />
                <Image
                    onClick={handleSignIn}
                    className='cursor-pointer rounded-[10px]'
                    src="/google_logo.png" alt="alt" width={250} height={250} />
                <Image
                    onClick={handleSignIn}
                    className='cursor-pointer rounded-[10px]'
                    src="/google_logo.png" alt="alt" width={250} height={250} />
                </div>
            </div>
        </div>
    );
};

export default Page;