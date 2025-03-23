"use client";

import { SessionProvider } from 'next-auth/react';
// import { HeroUIProvider } from '@heroui/react';
// import Loading from "@/shared/components/Loading";
import "@/app/front-end.css";
import AuthProvider from '@/app/provider/AuthProvider';
import Navbar from '@/shared/components/Navbar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/image/logo.jpg" />
        </head>
        <body>
          {/* <HeroUIProvider> */}
          {/* <Loading /> */}
          <AuthProvider>
            <div className='w-4xl mx-auto p-4 gap-3 lg:flex'>
              <Navbar />
              {children}
            </div>
          </AuthProvider>
          {/* </HeroUIProvider> */}
        </body>
      </html>
    </SessionProvider>
  );
}