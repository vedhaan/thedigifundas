import { services } from "@/lib/constants/navigation";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary pt-24 px-6">
      <h1 className="font-heading text-3xl font-bold mb-8 max-w-5xl mx-auto">Our Services</h1>
      <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="block rounded-lg border border-border p-4 hover:border-accent-primary">
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}