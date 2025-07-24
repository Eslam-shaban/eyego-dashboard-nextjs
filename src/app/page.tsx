'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils' // If you're using Tailwind utils (optional)
// import { UserProfile } from "@/types/UserProfile"

export default function Home() {
  // const [userData, setUserData] = useState<UserProfile | null>(null)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const { data } = await supabase
          .from('users')
          .select('full_name, email, role, amount')
          .eq('id', user.id)
          .single()

        if (data) setUserData(data)
      }
    }

    fetchProfile()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="w-full px-6 py-4 shadow-sm bg-card border-b">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <h1 className="text-xl font-semibold">Eyego Dashboard</h1>
          <div className="flex gap-2">
            <Link href="/dashboard">
              <Button variant="default">Dashboard</Button>
            </Link>
            <Link href="/dashboard/users">
              <Button variant="secondary">Users</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6">Welcome</h2>
        {userData ? (
          <div className="grid gap-4 bg-muted p-6 rounded-lg shadow">
            <p>
              <span className="font-medium">Name:</span> {userData.full_name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {userData.email}
            </p>
            <p>
              <span className="font-medium">Role:</span> {userData.role}
            </p>
            <p>
              <span className="font-medium">Amount:</span> ${userData.amount}
            </p>
          </div>
        ) : (
          <p className="text-muted-foreground">Loading user data...</p>
        )}
      </section>
    </main>
  )
}


// <main className="min-h-screen flex flex-col items-center justify-center gap-2 bg-background">
//   <h1 className="text-4xl font-bold mb-4">Welcome to Eyego Dashboard</h1>
//   <p className="mb-6">Please login to continue</p>
//   <Link href="/login">
//     <button className="bg-blue-600 text-foreground px-4 py-2 rounded hover:bg-blue-700">
//       Go to Login
//     </button>
//   </Link>
//   <Link href="/dashboard">
//     <button className="bg-blue-600 text-foreground px-4 py-2 rounded hover:bg-blue-700">
//       Go to Dashboard
//     </button>
//   </Link>
// </main>

