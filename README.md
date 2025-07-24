# Eyego Dashboard (Next.js)

Eyego Dashboard is a simple and powerful admin dashboard built with **Next.js**, **Supabase**, and **Tailwind CSS**. It supports authentication, role-based access control (RBAC), data tables, and charts.

---

## 🚀 Features

* 🔐 **Authentication** with Supabase
* 🛡️ **Admin-only access** to `/dashboard/users`
* 📊 Responsive charts using **Recharts**
* 📋 Table with sorting, filtering, and pagination using **TanStack Table**
* 🎨 Dark/light theme toggle with `next-themes`
* 🔔 Toast notifications with `react-toastify`

---

## 📁 Project Structure

```
/app              → Next.js app directory (pages, layout)
/components       → Reusable UI components (charts, layouts, guards)
/lib              → Supabase client, utils
/redux            → Redux setup and slices
/types            → TypeScript interfaces and types
/public           → Static assets like logo
```

---

## 🛠️ Tech Stack

* **Next.js App Router**
* **Supabase** for auth + Postgres DB
* **Redux Toolkit** for state management
* **Tailwind CSS** & **ShadCN UI**
* **TanStack Table v8**
* **Recharts**
* **React Toastify**

---

## 🔒 Authentication & Middleware

* Uses Supabase `auth.getUser()` to get current session
* `middleware.ts` redirects users to `/login` if not authenticated
* `ProtectedLayout` wraps all routes except login/signup
* `AdminGuard` protects `/dashboard/users` — only `role: 'Admin'` can access

---

## 📊 Dashboard Pages

### `/dashboard`

* Shows overview using:

  * Bar chart
  * Line chart
  * Area chart
  * Pie chart

### `/dashboard/users`

* Displays table of users from Supabase
* Admins only can view
* Supports:

  * Pagination
  * Column sorting
  * Search filter
  * Custom formatting (e.g. money, role badges)

---

## ⚙️ Getting Started

1. Clone the repo

```bash
git clone https://github.com/Eslam-shaban/eyego-dashboard-nextjs.git
cd eyego-dashboard-nextjs
```

2. Install dependencies

```bash
npm install
```

3. Set up environment
   Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

4. Run the development server

```bash
npm run dev
```

---

## 🧪 Supabase Setup

* Add a `users` table in Supabase
* Fields: `id`, `email`, `role`, etc.
* RLS policy example:

```sql
ALTER POLICY "user_can_access_his_own_data"
ON "public"."users"
TO public
USING (
  auth.uid() = id
);
```

* Update admin manually:

```sql
UPDATE public.users
SET role = 'Admin'
WHERE email = 'your@email.com';
```

---

## 📸 Screenshots

*Add screenshots if needed*

---

## 📬 Contact

Made with ❤️ by Eslam Shaban. Feel free to contribute or give feedback!

---

## 🪪 License

MIT License
