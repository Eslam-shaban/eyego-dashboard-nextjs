import { ReduxProvider } from "@/redux/ReduxProvider";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

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
            {children}
            <ToastContainer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
