'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { toast } from 'react-toastify'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (loginError) {
            toast.error(loginError.message);
            return setError(loginError.message)
        }

        //successful login
        toast.success("login successful");
        setEmail('')
        setPassword('')
        router.push('/dashboard/') // or dashboard
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gr-c1 via-gr-c2 to-gr-c3 px-4">

            <form onSubmit={handleLogin} className="space-y-6 bg-secondary p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <div className="relative">
                    <input
                        className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-secondary peer-focus:px-1">
                        Email
                    </label>
                </div>
                <div className="relative">
                    <input
                        className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type={showPassword ? "text" : "password"}
                        placeholder=""
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
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
                {error && <p className="text-red-500">{error}</p>}
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">Login</button>
                <p className="text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <span
                        onClick={() => router.push("/signup")}
                        className="text-blue-600 font-medium hover:underline cursor-pointer"
                    >
                        Register
                    </span>
                </p>
            </form>
        </div>
    )
}



// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { useDispatch } from 'react-redux'
// import { login } from '@/redux/features/authSlice'

// const mockUser = {
//     email: 'test@example.com',
//     password: '123456',
// }

// export default function LoginPage() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')
//     const dispatch = useDispatch()
//     const router = useRouter()

//     const handleLogin = (e: React.FormEvent) => {
//         e.preventDefault()

//         if (email === mockUser.email && password === mockUser.password) {
//             dispatch(login({ email }))
//             router.push('/dashboard') // Redirect to dashboard
//         } else {
//             setError('Invalid email or password')
//         }
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//                 {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full mb-4 p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full mb-6 p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Login
//                 </button>
//             </form>
//         </div>
//     )
// }
