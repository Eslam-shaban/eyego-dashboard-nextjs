import AppAreaChart from '@/components/AppAreaChart'
import AppBarChart from '@/components/AppBarChart'
import AppLineChart from '@/components/AppLineChart'
import AppPieChart from '@/components/AppPieChart'
import React from 'react'

export default function page() {
    return (
        <div className="p-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 min-h-screen">
            <div className="bg-primary-foreground p-4 rounded-xl shadow-md col-span-4 md:col-span-3 ">
                <AppBarChart />
            </div>

            <div className="bg-primary-foreground p-4 rounded-xl shadow-md col-span-4 md:col-span-1">
                <AppPieChart />
            </div>

            <div className="bg-primary-foreground p-4 rounded-xl shadow-md col-span-4  md:col-span-2">
                <AppAreaChart />
            </div>

            <div className="bg-primary-foreground p-4 rounded-xl shadow-md col-span-4  md:col-span-2">
                <AppLineChart />
            </div>

        </div>
    )
}
