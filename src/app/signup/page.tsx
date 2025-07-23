'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
        })

        if (signUpError) return setError(signUpError.message)

        // optional: insert into users table
        await supabase.from('users').insert([
            { id: data.user?.id, full_name: fullName, email }
        ])

        router.push('/login') // or auto-login if preferred
    }

    return (
        <form onSubmit={handleSignup} className="space-y-4 max-w-sm mx-auto mt-20">
            <h2 className="text-xl font-bold">Sign Up</h2>
            <input className="input" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
            <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-primary w-full" type="submit">Sign Up</button>
        </form>
    )
}
