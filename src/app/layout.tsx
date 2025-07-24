"use client"

import { ReduxProvider } from "@/redux/ReduxProvider";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import { usePathname } from 'next/navigation'
import { isProtectedRoute } from "@/lib/isProtectedRoute";
import ProtectedLayout from "@/components/ProtectedLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isProtected = isProtectedRoute(pathname);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {isProtected ? (
              <ProtectedLayout>{children}</ProtectedLayout>
            ) : (
              children
            )}
            <ToastContainer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
