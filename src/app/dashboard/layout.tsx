import { AppSidebar } from '@/components/AppSidebar'
import Navbar from '@/components/Navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex min-h-screen bg-gray-100'>
            <SidebarProvider>
                <AppSidebar />
                <main className='w-full'>
                    <Navbar />
                    <div className=''>
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </div>
    )
}
