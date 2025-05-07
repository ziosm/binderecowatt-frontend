import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servizi di Manutenzione Impianti - BinderEcowatt',
  description: 'Offriamo servizi di manutenzione ordinaria e straordinaria per impianti fotovoltaici e sistemi IoT, garantendo efficienza e durata nel tempo.',
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

export default function ManutenzionePage() {
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
            <Link href="/manutenzione" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Manutenzione</a></Link>
            <Link href="/chi-siamo" legacyBehavior><a className="px-3 hover:text-green-300">Chi Siamo</a></Link>
            <Link href="/blog" legacyBehavior><a className="px-3 hover:text-green-300">Blog</a></Link>
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Manutenzione e Assistenza Clienti</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Un impianto efficiente è un impianto ben mantenuto. BinderEcowatt offre servizi completi di manutenzione programmata e assistenza tecnica per garantire che il tuo impianto fotovoltaico e i tuoi sistemi IoT operino sempre al massimo delle loro potenzialità, preservando il tuo investimento nel tempo.
          </p>
        </section>

        <section className="py-10 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">I Nostri Servizi di Manutenzione</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Manutenzione Ordinaria Programmata</h3>
              <p className="text-gray-600 mb-4 flex-grow">Piani di manutenzione personalizzati che includono controlli periodici, pulizia dei pannelli solari, verifica dell'inverter e dei quadri elettrici, aggiornamento software dei sistemi IoT. Prevenire è meglio che curare.</p>
              <Link href="/contatti?servizio=manutenzione_ordinaria" legacyBehavior>
                <a className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center transition duration-300">Scopri i Piani</a>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Manutenzione Straordinaria e Pronto Intervento</h3>
              <p className="text-gray-600 mb-4 flex-grow">Servizio di diagnostica avanzata per guasti e malfunzionamenti. Interveniamo rapidamente per ripristinare la piena funzionalità del tuo impianto, minimizzando i disagi e le perdite di produzione.</p>
              <Link href="/contatti?servizio=manutenzione_straordinaria" legacyBehavior>
                <a className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center transition duration-300">Richiedi Assistenza</a>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Registro Manutenzione Digitale</h3>
              <p className="text-gray-600 mb-4 flex-grow">Accedi all'area clienti riservata per consultare lo storico degli interventi, la documentazione del tuo impianto e pianificare le prossime manutenzioni. Tutto a portata di click. (Prossimamente disponibile)</p>
              {/* Link all'area clienti, quando sarà pronta */}
              <a className="mt-auto bg-gray-400 text-white font-bold py-2 px-4 rounded text-center cursor-not-allowed" title="Funzionalità in sviluppo">Accedi all'Area Clienti</a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Perché la Manutenzione è Importante?</h2>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
            <p>Una corretta manutenzione assicura:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Massima Efficienza Energetica:</strong> Pannelli puliti e componenti funzionanti garantiscono la massima produzione di energia.</li>
              <li><strong>Maggiore Durata dell'Impianto:</strong> Interventi regolari prevengono guasti maggiori e prolungano la vita utile dei componenti.</li>
              <li><strong>Sicurezza:</strong> Controlli periodici verificano l'integrità dell'impianto, prevenendo rischi elettrici o strutturali.</li>
              <li><strong>Rispetto delle Garanzie:</strong> Molti produttori richiedono una manutenzione documentata per mantenere valide le garanzie.</li>
              <li><strong>Ottimizzazione del Ritorno sull'Investimento:</strong> Un impianto che produce di più e dura più a lungo massimizza il tuo risparmio.</li>
            </ul>
            <div className="text-center mt-8">
                <Link href="/contatti" legacyBehavior>
                    <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">Contattaci per un Piano Manutenzione</a>
                </Link>
            </div>
          </div>
        </section>

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

