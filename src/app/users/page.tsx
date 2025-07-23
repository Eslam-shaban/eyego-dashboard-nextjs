import { columns, User } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<User[]> {
    // Fetch data from your API here.
    return [
        { id: 1, name: "Eslam Shaban", email: "eslam@example.com", role: "Admin", amount: 2000 },
        { id: 2, name: "Ahmed Ali", email: "ahmed@example.com", role: "User", amount: 1500 },
        { id: 3, name: "Sara Gamal", email: "sara@example.com", role: "Editor", amount: 6600 },
        { id: 4, name: "Youssef Adel", email: "youssef@example.com", role: "User", amount: 3500 },
        { id: 5, name: "Mona Hassan", email: "mona@example.com", role: "User", amount: 10000 },
        { id: 6, name: "Omar Nabil", email: "omar@example.com", role: "Admin", amount: 4000 },
        { id: 7, name: "Layla Tarek", email: "layla@example.com", role: "User", amount: 87876 },
        { id: 8, name: "Khaled Said", email: "khaled@example.com", role: "User", amount: 2527 },
        { id: 9, name: "Dina Ashraf", email: "dina@example.com", role: "Editor", amount: 5000 },
        { id: 10, name: "Mostafa Samir", email: "mostafa@example.com", role: "User", amount: 8000 },
        { id: 11, name: "Farah Hany", email: "farah@example.com", role: "User", amount: 1000 },
        { id: 12, name: "Ramy Magdy", email: "ramy@example.com", role: "User", amount: 4000 },
        { id: 13, name: "Hana Gamal", email: "hana@example.com", role: "Editor", amount: 9000 },
        { id: 14, name: "Tamer Fathy", email: "tamer@example.com", role: "User", amount: 5600 },
        { id: 15, name: "Nour Yasser", email: "nour@example.com", role: "Admin", amount: 7000 },
        { id: 16, name: "Ziad Khalil", email: "ziad@example.com", role: "User", amount: 9554 },
        { id: 17, name: "Mai Hassan", email: "mai@example.com", role: "Editor", amount: 6485 },
        { id: 18, name: "Ali Hossam", email: "ali@example.com", role: "User", amount: 7443 },
        { id: 19, name: "Reem Ayman", email: "reem@example.com", role: "User", amount: 75758 },
        { id: 20, name: "Bassel Adel", email: "bassel@example.com", role: "User", amount: 36996 },
        { id: 21, name: "Yara Fadel", email: "yara@example.com", role: "User", amount: 8514 },
        { id: 22, name: "Karim Maher", email: "karim@example.com", role: "Admin", amount: 3258 },
        { id: 23, name: "Salma Reda", email: "salma@example.com", role: "Editor", amount: 85239 },
        { id: 24, name: "Mohamed Ehab", email: "mohamed@example.com", role: "User", amount: 9965 },
        { id: 25, name: "Aya Khaled", email: "aya@example.com", role: "User", amount: 1234 },
    ]


}

export default async function UsersPage() {

    const data = await getData()
    return (
        <div className="container mx-auto py-10 ">
            <DataTable columns={columns} data={data} />
        </div>
    )
}


// "use client";
// import React, { useState, useMemo } from "react";

// const users = [
//     { id: 1, name: "Alice Johnson", email: "alice@example.com" },
//     { id: 2, name: "Bob Smith", email: "bob@example.com" },
//     { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
//     { id: 4, name: "Diana Prince", email: "diana@example.com" },
//     // Add more mock users
// ];

// export default function UsersPage() {
//     const [search, setSearch] = useState("");
//     const [sortBy, setSortBy] = useState<"name" | "email">("name");
//     const [currentPage, setCurrentPage] = useState(1);
//     const usersPerPage = 3;

//     const filteredUsers = useMemo(() => {
//         return users
//             .filter((user) =>
//                 user.name.toLowerCase().includes(search.toLowerCase()) ||
//                 user.email.toLowerCase().includes(search.toLowerCase())
//             )
//             .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
//     }, [search, sortBy]);

//     const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
//     const paginatedUsers = filteredUsers.slice(
//         (currentPage - 1) * usersPerPage,
//         currentPage * usersPerPage
//     );

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Users Table</h1>

//             <div className="mb-4 flex flex-col sm:flex-row gap-4">
//                 <input
//                     type="text"
//                     placeholder="Search by name or email"
//                     className="border rounded px-3 py-1"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />

//                 <select
//                     className="border rounded px-3 py-1"
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value as "name" | "email")}
//                 >
//                     <option value="name">Sort by Name</option>
//                     <option value="email">Sort by Email</option>
//                 </select>
//             </div>

//             <table className="w-full border">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="p-2 border">ID</th>
//                         <th className="p-2 border">Name</th>
//                         <th className="p-2 border">Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {paginatedUsers.map((user) => (
//                         <tr key={user.id} className="hover:bg-gray-50">
//                             <td className="p-2 border">{user.id}</td>
//                             <td className="p-2 border">{user.name}</td>
//                             <td className="p-2 border">{user.email}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <div className="flex justify-center gap-2 mt-4">
//                 {Array.from({ length: totalPages }, (_, i) => (
//                     <button
//                         key={i}
//                         className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
//                             }`}
//                         onClick={() => setCurrentPage(i + 1)}
//                     >
//                         {i + 1}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }
