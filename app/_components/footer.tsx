"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} AI Career Guru. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
