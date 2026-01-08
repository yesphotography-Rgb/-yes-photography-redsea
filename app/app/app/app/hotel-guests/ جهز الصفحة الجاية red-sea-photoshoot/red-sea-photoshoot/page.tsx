// app/red-sea-photoshoot/page.tsx
import Link from "next/link";

const packages = [
  { slug: "couple-romance", title: "Couple Romance", price: "From €90" },
  { slug: "flying-dress", title: "Flying Dress Experience", price: "From €129" },
  { slug: "family-memories", title: "Family Beach Memories", price: "From €109" },
  { slug: "honeymoon-bliss", title: "Honeymoon Bliss", price: "From €119" }
];

export default function RedSeaPhotoshoot() {
  return (
    <main className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-gold text-center mb-12">
        Red Sea Photoshoots
      </h1>
      <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
        Premium locations in Hurghada & Marsa Alam. Clear pricing, professional editing, digital delivery.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.slug} className="card hover:border-gold transition-all">
            <h3 className="text-2xl font-bold text-gold mb-4">{pkg.title}</h3>
            <p className="text-gray-300 mb-4">{pkg.price}</p>
            <Link
              href={`/red-sea-photoshoot/${pkg.slug}`}
              className="btn-gold px-6 py-3 rounded-xl block text-center"
            >
              View & Book
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
