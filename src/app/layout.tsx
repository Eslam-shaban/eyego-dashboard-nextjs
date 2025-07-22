import { ReduxProvider } from "@/redux/ReduxProvider";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
