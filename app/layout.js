import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from 'next/font/google';
import {
  ClerkProvider
} from '@clerk/nextjs'
import Header from "./components/Header";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "penguin",
  description: "Project Management Tool",
};

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={inter.className}
        >
          {/* <ThemeProvider attribute="class" defaultTheme="dark" > */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>developed by subhampreet</p>
              </div>
            </footer>
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
