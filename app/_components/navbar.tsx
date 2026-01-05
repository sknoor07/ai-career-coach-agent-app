"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
    const { user } = useUser();
    const router = useRouter();
    const pathname = usePathname();

    if (pathname.startsWith("/dashboard")) {
      return null;
    }

  return (
    <header className="bg-white border-b py-4 px-6 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <Link href="/">
          <span className="text-xl font-bold">AI Career Guru</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium">
            Features
          </Link>

          
          {!user?<Button
            className=" cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Sign In
          </Button>:
          <div className="flex items-center gap-6">
            <UserButton />
          <Button
            className=" cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </Button>
          </div>
          }
        </nav>
      </div>
    </header>
  );
}
