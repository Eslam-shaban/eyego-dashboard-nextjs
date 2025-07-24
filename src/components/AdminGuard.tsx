'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { toast } from 'react-toastify'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [allowed, setAllowed] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAdmin = async () => {
            const { data: { user }, error: userError } = await supabase.auth.getUser()

            if (!user || userError) {
                toast.error('You must be logged in')
                router.replace('/login')
                return
            }

            const { data, error } = await supabase
                .from('users') // your actual table name (change if needed)
                .select('role')
                .eq('id', user.id)
                .single()

            if (error || !data) {
                toast.error('Access denied')
                router.replace('/dashboard')
                return
            }

            if (data.role === 'Admin') {
                setAllowed(true)
            } else {
                toast.error('Admins only')
                router.replace('/dashboard')
            }

            setLoading(false)
        }

        checkAdmin()
    }, [router])

    if (loading) return <div>Loading...</div>

    return <>{allowed && children}</>
}
