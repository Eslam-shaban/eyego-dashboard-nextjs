import { ReduxProvider } from "@/redux/ReduxProvider";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            {/* <div className='flex min-h-screen bg-background text-foreground'>
              <SidebarProvider>
                <AppSidebar />
                <main className='w-full'>
                  <Navbar />
                  <div className='px-4 bg-secondary min-h-screen'>
                    {children}
                  </div>
                </main>
              </SidebarProvider>
            </div> */}
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
