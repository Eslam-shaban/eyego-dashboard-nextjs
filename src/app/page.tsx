import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Eyego Dashboard</h1>
      <p className="mb-6">Please login to continue</p>
      <Link href="/login">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go to Login
        </button>
      </Link>
      <Link href="/dashboard">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go to Dashboard
        </button>
      </Link>
    </main>
  );
}
