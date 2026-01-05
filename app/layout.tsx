import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Career Guru",
  description:
    "Land Your Dream Job with AI-powered career coaching, resume tips, interview prep & career tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`
            ${geistSans.variable}
            ${geistMono.variable}
            antialiased
            min-h-screen
            flex
            flex-col
            bg-background
            text-foreground
          `}
        >
          <Provider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
