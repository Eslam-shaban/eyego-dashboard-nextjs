'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
    const user = useSelector((state: RootState) => state.auth.user)
    const router = useRouter()

    // useEffect(() => {
    //     if (!user) {
    //         router.push('/login')
    //     }
    // }, [user])

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
            <p className="mt-4 text-gray-600">You are logged in as {user?.email}</p>
        </div>
    )
}
