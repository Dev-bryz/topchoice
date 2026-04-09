"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          TopChoice Forwarders
        </Link>

        {/* NAV */}
        <nav className="hidden sm:flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          {/* <Link href="/#services" className="hover:text-black dark:hover:text-white transition">
            Services
          </Link>

          <Link href="/about" className="hover:text-black dark:hover:text-white transition">
            About
          </Link> */}

          <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
            Contact Us
          </Link>
        </nav>

      </div>
    </header>
  );
}