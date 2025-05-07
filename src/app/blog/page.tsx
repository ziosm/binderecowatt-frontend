import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Novità e Approfondimenti su Fotovoltaico e IoT - BinderEcowatt',
  description: 'Leggi gli ultimi articoli del nostro blog su impianti fotovoltaici, sistemi di monitoraggio IoT, efficienza energetica e incentivi.',
};

const companyData = {
  name: "BinderEcowatt",
  companyName: "Elettro Impianti srl",
  address: "Via Risorgimento 2, Vigonovo (VE), 30030",
  vatNumber: "04820420273",
  email: "binderecowatt@gmail.com",
  phone: "3277949182",
  domain: "http://binderecowatt.it/"
};

// Placeholder per articoli del blog
const blogPosts = [
  {
    id: 1,
    title: "I Vantaggi dell'Energia Fotovoltaica nel 2025",
    slug: "vantaggi-energia-fotovoltaica-2025",
    date: "2025-04-15",
    excerpt: "Scopri perché investire in un impianto fotovoltaico è ancora una scelta vincente per risparmiare e rispettare l'ambiente...",
    imageUrl: "/placeholder-blog-1.jpg", // Immagine placeholder
  },
  {
    id: 2,
    title: "Come Funzionano i Sistemi di Accumulo per Fotovoltaico",
    slug: "sistemi-accumulo-fotovoltaico-guida",
    date: "2025-04-28",
    excerpt: "Una guida completa per capire l'importanza delle batterie di accumulo e come massimizzare l'autoconsumo energetico...",
    imageUrl: "/placeholder-blog-2.jpg", // Immagine placeholder
  },
  {
    id: 3,
    title: "Monitoraggio IoT: Tieni Sotto Controllo i Tuoi Consumi",
    slug: "monitoraggio-iot-consumi-energetici",
    date: "2025-05-05",
    excerpt: "L'Internet of Things al servizio dell'efficienza energetica. Come i sistemi di monitoraggio intelligenti possono aiutarti a risparmiare...",
    imageUrl: "/placeholder-blog-3.jpg", // Immagine placeholder
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" legacyBehavior><a className="text-3xl font-bold">{companyData.name}</a></Link>
          <nav>
            <Link href="/" legacyBehavior><a className="px-3 hover:text-green-300">Home</a></Link>
            <Link href="/impianti-fotovoltaici" legacyBehavior><a className="px-3 hover:text-green-300">Impianti Fotovoltaici</a></Link>
            <Link href="/sistemi-iot" legacyBehavior><a className="px-3 hover:text-green-300">Sistemi IoT</a></Link>
            <Link href="/mappa-preventivi" legacyBehavior><a className="px-3 hover:text-green-300">Mappa Preventivi</a></Link>
            <Link href="/manutenzione" legacyBehavior><a className="px-3 hover:text-green-300">Manutenzione</a></Link>
            <Link href="/chi-siamo" legacyBehavior><a className="px-3 hover:text-green-300">Chi Siamo</a></Link>
            <Link href="/blog" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Blog</a></Link>
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Il Nostro Blog</h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Rimani aggiornato sulle ultime novità, tecnologie e consigli utili nel mondo del fotovoltaico, dei sistemi IoT e dell'efficienza energetica. Approfondimenti, guide e casi studio per aiutarti a fare scelte consapevoli.
          </p>
        </section>

        <section className="py-10">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                {/* Immagine Articolo (Placeholder) */}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  {post.imageUrl ? `Immagine per ${post.title}` : 'Immagine non disponibile'}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold text-green-700 mb-3">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">Pubblicato il: {post.date}</p>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} legacyBehavior>
                    <a className="mt-auto text-yellow-600 hover:text-yellow-700 font-semibold self-start">Leggi di più &rarr;</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {blogPosts.length === 0 && (
            <p className="text-center text-gray-600">Al momento non ci sono articoli nel blog. Torna a trovarci presto!</p>
          )}
        </section>
        
        {/* Aggiungere paginazione se ci sono molti articoli */}

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} {companyData.companyName} - P.IVA {companyData.vatNumber}</p>
          <p>{companyData.address}</p>
          <p>Email: <a href={`mailto:${companyData.email}`} className="hover:text-green-300">{companyData.email}</a> | Tel: <a href={`tel:${companyData.phone}`} className="hover:text-green-300">{companyData.phone}</a></p>
          <p><Link href="/privacy-policy" legacyBehavior><a className="hover:text-green-300">Privacy Policy</a></Link> | <Link href="/cookie-policy" legacyBehavior><a className="hover:text-green-300">Cookie Policy</a></Link></p>
          <p>Sito web: <a href={companyData.domain} target="_blank" rel="noopener noreferrer" className="hover:text-green-300">{companyData.domain}</a></p>
        </div>
      </footer>
    </div>
  );
}

