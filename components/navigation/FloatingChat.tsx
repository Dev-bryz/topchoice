"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-black shadow-lg hover:scale-105 transition"
    >
      <Phone size={24} />
    </Link>
  );
}