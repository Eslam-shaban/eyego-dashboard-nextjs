'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { toast } from 'react-toastify'

export default function AuthCallback() {
    const router = useRouter()

    useEffect(() => {
        const handleAuth = async () => {
            const { data, error } = await supabase.auth.getSession()

            if (error) {
                toast.error("Authentication failed: ")
                console.error("Auth failed: " + error.message)
                return
            }

            const session = data.session
            if (!session) {
                toast.error("No session found. Please try logging in again.")
                console.error("No session found after verification.")
                return
            }

            const user = session.user

            // Check if user already exists in 'users' table
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('id', user.id)
                .maybeSingle()

            // If not found, insert new profile
            if (!existingUser) {
                await supabase.from('users').insert([
                    {
                        id: user.id,
                        full_name: user.user_metadata?.full_name || '',
                        email: user.email,
                        role: 'User',
                    }
                ])
            }

            toast.success("Account verified successfully!")
            router.push('/dashboard')
        }

        handleAuth()
    }, [])

    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-lg font-medium">Logging you in...</p>
        </div>
    )
}
