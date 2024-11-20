import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from 'next/font/google';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Header from "./components/Header";

export const metadata = {
  title: "ZCRUM",
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
          <ThemeProvider attribute="class" defaultTheme="dark" >
            <Header />
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>developed by subhampreet</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
