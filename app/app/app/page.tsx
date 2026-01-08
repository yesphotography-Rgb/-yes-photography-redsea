import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-hero-gradient flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-extrabold text-gold mb-8">YES Photography</h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-16">Capture Eternal Memories in the Red Sea</p>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Link href="/hotel-guests">
            <div className="card hover:border-gold transition-all cursor-pointer">
              <h2 className="text-4xl font-bold text-gold mb-6">Hotel Guest</h2>
              <p className="text-xl text-gray-300">Free professional session inside your resort.<br />Flying dresses, family moments – pay only for photos you love.</p>
              <button className="mt-8 btn-gold px-8 py-4 rounded-xl text-lg">Discover Hotel Experience</button>
            </div>
          </Link>
          <Link href="/red-sea-photoshoot">
            <div className="card hover:border-gold transition-all cursor-pointer">
              <h2 className="text-4xl font-bold text-gold mb-6">Red Sea Photoshoot</h2>
              <p className="text-xl text-gray-300">Exclusive packages in Hurghada & Marsa Alam.<br />Clear prices, premium locations, online booking.</p>
              <button className="mt-8 btn-gold px-8 py-4 rounded-xl text-lg">View Packages & Book</button>
            </div>
          </Link>
        </div>
        <p className="mt-20 text-gray-500 text-lg">Experience. Emotion. Memory.</p>
      </div>
    </main>
  );
}
