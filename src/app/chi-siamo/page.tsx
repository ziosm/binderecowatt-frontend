import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Siamo - BinderEcowatt',
  description: 'Scopri la storia, la mission e il team di BinderEcowatt (Elettro Impianti srl), la tua azienda di fiducia per impianti fotovoltaici e soluzioni IoT.',
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

export default function ChiSiamoPage() {
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
            <Link href="/chi-siamo" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Chi Siamo</a></Link>
            <Link href="/blog" legacyBehavior><a className="px-3 hover:text-green-300">Blog</a></Link>
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Chi Siamo: La Vostra Scelta per l'Energia del Futuro</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              <strong>{companyData.name}</strong>, un marchio di <strong>{companyData.companyName}</strong>, nasce dalla passione per l'innovazione tecnologica e l'impegno verso un futuro energetico più sostenibile. Con sede a {companyData.address.split(',')[1].trim()}, operiamo con l'obiettivo di fornire soluzioni energetiche intelligenti, efficienti e su misura per privati e aziende.
            </p>
            <p>
              La nostra esperienza pluriennale nel settore degli impianti elettrici, unita a una costante ricerca delle migliori tecnologie disponibili nel campo del fotovoltaico e dell'Internet of Things (IoT), ci permette di offrire un servizio completo: dalla consulenza iniziale alla progettazione, dall'installazione a regola d'arte fino alla manutenzione e all'assistenza post-vendita.
            </p>
          </div>
        </section>

        <section className="py-10 bg-gray-50 rounded-lg shadow-lg">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">La Nostra Mission</h2>
                <p className="text-gray-700 mb-4">
                  La nostra mission è guidare i nostri clienti verso l'indipendenza energetica, offrendo soluzioni fotovoltaiche e IoT che non solo riducano i costi in bolletta e l'impatto ambientale, ma migliorino anche il comfort e l'efficienza della gestione energetica quotidiana. Crediamo fermamente nel potere dell'energia pulita e nell'innovazione come motori di un cambiamento positivo.
                </p>
                <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-6">La Nostra Vision</h2>
                <p className="text-gray-700">
                  Aspiriamo a diventare un punto di riferimento nel settore delle energie rinnovabili e delle tecnologie smart, riconosciuti per la qualità dei nostri servizi, la competenza del nostro team e la capacità di anticipare le esigenze di un mercato in continua evoluzione. Vogliamo contribuire attivamente alla transizione energetica, un impianto alla volta.
                </p>
              </div>
              {/* Immagine placeholder per team o valori aziendali */}
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-center p-4">
                Immagine rappresentativa dell'azienda o del team
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Perché Scegliere {companyData.name}?</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Esperienza e Competenza</h3>
              <p className="text-gray-600">Un team di professionisti qualificati con una solida esperienza nel settore energetico e delle installazioni.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Qualità Certificata</h3>
              <p className="text-gray-600">Utilizziamo solo materiali e componenti dei migliori marchi, garantendo impianti performanti e duraturi nel tempo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Approccio Personalizzato</h3>
              <p className="text-gray-600">Ogni cliente è unico. Offriamo consulenza e soluzioni su misura, pensate per le tue specifiche esigenze.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Assistenza Completa</h3>
              <p className="text-gray-600">Ti seguiamo in ogni fase: dalla progettazione all'installazione, dalla gestione burocratica all'assistenza post-vendita.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Innovazione Continua</h3>
              <p className="text-gray-600">Siamo costantemente aggiornati sulle ultime tecnologie per offrirti soluzioni all'avanguardia ed efficienti.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Trasparenza e Affidabilità</h3>
              <p className="text-gray-600">Preventivi chiari, contratti trasparenti e un impegno costante per la soddisfazione del cliente.</p>
            </div>
          </div>
        </section>

        {/* Sezione Certificazioni e Partnership (opzionale) */}
        {/* <section className="py-10 bg-gray-100 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Certificazioni e Partnership</h2>
          <div class="text-center text-gray-600">
            <p>Qui verranno inseriti loghi di certificazioni o partner.</p>
          </div>
        </section> */}

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

