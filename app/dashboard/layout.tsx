import Navigation from '@/components/Navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import React from 'react'

type DashboardLayoutProps = {
    children: React.ReactNode;
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
  
  return (
    <ProtectedRoute>
        <div className="flex min-h-screen bg-gray-100">
          <Navigation />
          <main className="flex-1 max-sm:ml-14 max-md:ml-18 max-[400px]:ml-0 overflow-scroll transition-all duration-300">
            {children}
          </main>
        </div>
    </ProtectedRoute>
  )
}

export default DashboardLayout