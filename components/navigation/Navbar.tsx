"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur z-50">
      <div className="flex items-center justify-between px-6 sm:px-8 py-5 max-w-6xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight">
          TopChoice Forwarders
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden sm:flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
            Contact Us
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="sm:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-2 border-b border-zinc-200 dark:border-zinc-800"
            >
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}