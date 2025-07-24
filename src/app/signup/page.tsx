'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { toast } from 'react-toastify'
import { Eye, EyeOff } from 'lucide-react'

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
        })
        if (signUpError) {
            toast.error(signUpError.message || "Signup failed.")
            setLoading(false)
            return
        }
        const user = data.user
        if (!user) {
            toast.error("User creation failed. Please try again.")
            setLoading(false)
            return
        }

        const { error: insertError } = await supabase.from('users').upsert({
            id: user.id,
            email,
            full_name: fullName,
            role: 'User',
            amount: 0
        })

        if (insertError) {
            toast.error("Failed to save user profile.")
            console.error(insertError.message)
            setLoading(false)
            return
        }

        toast.success("Signup successful! Redirecting...")
        setEmail('')
        setPassword('')
        setFullName('')

        // Wait briefly then redirect
        setTimeout(() => router.push('/dashboard'), 1000)
        setLoading(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gr-c1 via-gr-c2 to-gr-c3 px-4">
            <form onSubmit={handleSignup} className="space-y-6 bg-secondary p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

                {/* Full Name */}
                <div className="relative">
                    <input
                        type="text"
                        className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder=""
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        required
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-secondary peer-focus:px-1">
                        Full Name
                    </label>
                </div>

                {/* Email */}
                <div className="relative">
                    <input
                        type="email"
                        className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder=""
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-secondary peer-focus:px-1">
                        Email
                    </label>
                </div>

                {/* Password */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder=""
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-secondary peer-focus:px-1">
                        Password
                    </label>
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {/* Submit */}
                <button
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <span className="loader border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
                            Signing up...
                        </div>
                    ) : (
                        "Sign Up"
                    )}
                </button>
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="text-blue-600 font-medium hover:underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    )
}
