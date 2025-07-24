"use client"

import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Bell, LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from "next-themes"
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
export default function Navbar() {
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();
    const { setTheme } = useTheme();
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            router.push('/login') // or your homepage
        } else {
            console.error('Logout failed:', error.message)
        }
    }
    return (
        <div className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
            {/* LEFT SIDE */}
            <SidebarTrigger />

            {/* RIGHT SIDE */}

            {/* THEME MENU  */}
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="icon">
                    <Bell className="w-5 h-5" />
                </Button>

                {/* USER MENU  */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="/mypic.jpg" />
                            <AvatarFallback>{user?.email?.split("@")[0]}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mr-2 w-48">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="group hover:font-semibold" asChild>
                            <Link href="/">
                                <User className="h-5 w-5 mr-2 text-gray-500 group-hover:text-primary transition-colors" />
                                Profile
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="group hover:font-semibold">
                            <Settings className="h-5 w-5 mr-2 text-blue-500 group-hover:text-blue-700 transition-transform group-hover:rotate-180" />
                            Settings
                        </DropdownMenuItem>

                        <DropdownMenuItem variant='destructive' className="hover:font-semibold" onClick={handleLogout} >
                            <LogOut className="h-5 w-5 mr-2" />
                            Logout

                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
