import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur z-50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-gold">YES Photography</Link>
        <div className="flex gap-8 text-lg">
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <a href="https://wa.me/+201234567890" className="btn-gold px-6 py-3 rounded-xl">WhatsApp</a>
        </div>
      </div>
    </nav>
  );
}
