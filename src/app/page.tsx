import Link from 'next/link';

// Componenti da creare separatamente
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import HeroSection from '@/components/home/HeroSection';
// import ServicesIntro from '@/components/home/ServicesIntro';
// import WhyChooseUs from '@/components/home/WhyChooseUs';
// import InteractiveMapTeaser from '@/components/home/InteractiveMapTeaser';
// import BenefitsSection from '@/components/home/BenefitsSection';
// import Testimonials from '@/components/home/Testimonials';
// import BlogPreview from '@/components/home/BlogPreview';

export default function HomePage() {
  const companyData = {
    name: "BinderEcowatt",
    companyName: "Elettro Impianti srl",
    address: "Via Risorgimento 2, Vigonovo (VE), 30030",
    vatNumber: "04820420273",
    email: "binderecowatt@gmail.com",
    phone: "3277949182",
    domain: "http://binderecowatt.it/"
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header companyName={companyData.name} phone={companyData.phone} email={companyData.email} /> */}
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">{companyData.name}</h1>
          <nav>
            <Link href="/" legacyBehavior><a className="px-3 hover:text-green-300">Home</a></Link>
            <Link href="/impianti-fotovoltaici" legacyBehavior><a className="px-3 hover:text-green-300">Impianti Fotovoltaici</a></Link>
            <Link href="/sistemi-iot" legacyBehavior><a className="px-3 hover:text-green-300">Sistemi IoT</a></Link>
            <Link href="/mappa-preventivi" legacyBehavior><a className="px-3 hover:text-green-300">Mappa Preventivi</a></Link>
            <Link href="/manutenzione" legacyBehavior><a className="px-3 hover:text-green-300">Manutenzione</a></Link>
            <Link href="/chi-siamo" legacyBehavior><a className="px-3 hover:text-green-300">Chi Siamo</a></Link>
            <Link href="/blog" legacyBehavior><a className="px-3 hover:text-green-300">Blog</a></Link>
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-green-700 mb-4">Trasforma il Sole in Risparmio</h2>
          <p className="text-xl text-gray-700 mb-8">Soluzioni Fotovoltaiche e IoT Intelligenti per la Tua Casa e Azienda.</p>
          <Link href="/mappa-preventivi" legacyBehavior>
            <a className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Richiedi un Preventivo Gratuito Ora
            </a>
          </Link>
        </section>

        {/* ServicesIntro */}
        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">I Nostri Servizi Chiave</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-semibold text-green-700 mb-3">Impianti Fotovoltaici</h4>
              <p className="text-gray-600 mb-4">Installazione di impianti fotovoltaici su misura per abitazioni e aziende, per un futuro energetico sostenibile e conveniente.</p>
              <Link href="/impianti-fotovoltaici" legacyBehavior><a className="text-yellow-600 hover:text-yellow-700 font-semibold">Scopri di più &rarr;</a></Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-semibold text-green-700 mb-3">Sistemi di Monitoraggio IoT</h4>
              <p className="text-gray-600 mb-4">Soluzioni IoT avanzate per il monitoraggio e l'ottimizzazione dei consumi energetici, per una gestione intelligente della tua energia.</p>
              <Link href="/sistemi-iot" legacyBehavior><a className="text-yellow-600 hover:text-yellow-700 font-semibold">Scopri di più &rarr;</a></Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-semibold text-green-700 mb-3">Manutenzione Specializzata</h4>
              <p className="text-gray-600 mb-4">Servizi di manutenzione ordinaria e straordinaria per garantire la massima efficienza e durata del tuo impianto.</p>
              <Link href="/manutenzione" legacyBehavior><a className="text-yellow-600 hover:text-yellow-700 font-semibold">Scopri di più &rarr;</a></Link>
            </div>
          </div>
        </section>
        
        {/* InteractiveMapTeaser */}
        <section className="py-16 bg-green-50 rounded-lg shadow">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Ottieni un Preventivo Personalizzato</h3>
            <p className="text-lg text-gray-700 mb-8">Utilizza la nostra mappa interattiva per selezionare la tua regione e richiedere un preventivo dettagliato in pochi semplici passi.</p>
            <Link href="/mappa-preventivi" legacyBehavior>
              <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Vai alla Mappa Interattiva
              </a>
            </Link>
          </div>
        </section>

        {/* Altre sezioni come WhyChooseUs, BenefitsSection, Testimonials, BlogPreview verranno aggiunte qui */}

      </main>

      {/* <Footer companyName={companyData.companyName} address={companyData.address} vatNumber={companyData.vatNumber} email={companyData.email} phone={companyData.phone} domain={companyData.domain} /> */}
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

