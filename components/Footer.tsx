import { Github, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full p-6 mt-10 flex flex-col items-center gap-4 bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-t-2xl shadow-inner">
      <div className="flex gap-4">
        <Link href="https://github.com" aria-label="GitHub" className="p-2 rounded-full hover:bg-black/10">
          <Github />
        </Link>
        <Link href="https://twitter.com" aria-label="Twitter" className="p-2 rounded-full hover:bg-black/10">
          <Twitter />
        </Link>
        <Link href="/iletisim" aria-label="İletişim" className="p-2 rounded-full hover:bg-black/10">
          <Mail />
        </Link>
      </div>
      <span className="text-sm">© 2025 Oyun Portalı</span>
    </footer>
  );
}
