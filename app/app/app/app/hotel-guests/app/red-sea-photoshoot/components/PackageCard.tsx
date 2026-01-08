import Link from "next/link";

export default function PackageCard({ title, price, desc, slug }: any) {
  return (
    <div className="card hover:border-gold transition-all">
      <h3 className="text-2xl font-bold text-gold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{desc}</p>
      <p className="text-3xl font-bold text-gold mb-8">{price}</p>
      <Link
        href={`/red-sea-photoshoot/${slug}`}
        className="btn-gold px-6 py-3 rounded-xl block text-center"
      >
        View Details & Book
      </Link>
    </div>
  );
}
