"use client"

import { ColumnDef } from "@tanstack/react-table"
import { cn } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
    id: number
    name: string
    email: string
    role: string
    amount: number
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => {
            const role: string = row.getValue("role")
            return <span className={
                cn(`text-foreground py-1 px-2 rounded-full`,
                    role === "Admin" && "bg-red-500/50 ",
                    role === "User" && "bg-blue-500/50 ",
                    role === "Editor" && "bg-green-500/50")}>{role}</span>
        }
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formattedAmount = new Intl.NumberFormat('ar-EG', {
                style: 'currency',
                currency: 'EGP',
            }).format(amount);
            return <span className="text-foreground">{formattedAmount}</span>
        },
    }

]