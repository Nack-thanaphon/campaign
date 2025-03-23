"use client";

import { SessionProvider } from 'next-auth/react';
// import { HeroUIProvider } from '@heroui/react';
// import Loading from "@/shared/components/Loading";
import "@/app/front-end.css";
import AuthProvider from '@/app/provider/AuthProvider';

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
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </SessionProvider>
  );
}