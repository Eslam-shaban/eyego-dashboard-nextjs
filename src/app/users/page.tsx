"use client";
import React, { useState, useMemo } from "react";

const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
    { id: 4, name: "Diana Prince", email: "diana@example.com" },
    // Add more mock users
];

export default function UsersPage() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<"name" | "email">("name");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 3;

    const filteredUsers = useMemo(() => {
        return users
            .filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }, [search, sortBy]);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users Table</h1>

            <div className="mb-4 flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    className="border rounded px-3 py-1"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border rounded px-3 py-1"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "name" | "email")}
                >
                    <option value="name">Sort by Name</option>
                    <option value="email">Sort by Email</option>
                </select>
            </div>

            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="p-2 border">{user.id}</td>
                            <td className="p-2 border">{user.name}</td>
                            <td className="p-2 border">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
                            }`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
