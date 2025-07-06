"use client";
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full p-4 flex justify-between items-center bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 shadow-md rounded-b-2xl">
      <Link href="/" className="text-2xl">🎮</Link>
      <nav className="hidden md:flex gap-4 font-semibold">
        <Link href="/">Anasayfa</Link>
        <Link href="/oyunlar">Oyunlar</Link>
        <Link href="/iletisim">İletişim</Link>
      </nav>
      <button
        className="md:hidden p-2" onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <Menu />
      </button>
      {open && (
        <nav className="absolute top-16 right-4 bg-white rounded shadow-md flex flex-col p-4 gap-2 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Anasayfa</Link>
          <Link href="/oyunlar" onClick={() => setOpen(false)}>Oyunlar</Link>
          <Link href="/iletisim" onClick={() => setOpen(false)}>İletişim</Link>
        </nav>
      )}
    </header>
  );
}
