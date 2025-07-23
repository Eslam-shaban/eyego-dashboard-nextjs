'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (loginError) return setError(loginError.message)

        router.push('/users') // or dashboard
    }

    return (
        <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto mt-20">
            <h2 className="text-xl font-bold">Login</h2>
            <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-primary w-full" type="submit">Login</button>
        </form>
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
