import AdminFooter from '@/components/admin/navigation/admin-footer';
import Sidebar from '@/components/admin/navigation/admin-sidebar';
import BackgroundElements from '@/components/shared/background-elements';
import { AuthProvider } from '@/contexts/auth-context';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AuthProvider>
        <div className="flex min-h-screen bg-background">
          <BackgroundElements />
          <Sidebar />
          <main className="flex-1 ml-0 md:ml-[250px] transition-all">
            <div className="min-h-[85dvh]">{children}</div>
            <AdminFooter />
          </main>
        </div>
      </AuthProvider>
    </SessionProvider>
  );
}
