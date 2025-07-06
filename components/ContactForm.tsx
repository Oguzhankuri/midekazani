'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-8 flex flex-col items-center" id="iletisim">
      <h2 className="text-3xl font-bold mb-4">İletişim</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input placeholder="İsim" className="p-2 rounded-xl border" required />
        <input type="email" placeholder="E-posta" className="p-2 rounded-xl border" required />
        <textarea placeholder="Mesaj" className="p-2 rounded-xl border" required />
        <button type="submit" className="bg-indigo-500 text-white rounded-xl p-2 hover:bg-indigo-600">Gönder</button>
      </form>
      {sent && <span className="mt-4 text-green-600">Teşekkürler!</span>}
    </section>
  );
}
