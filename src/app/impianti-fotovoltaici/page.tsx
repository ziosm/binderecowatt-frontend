import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impianti Fotovoltaici - BinderEcowatt',
  description: 'Scopri le nostre soluzioni per impianti fotovoltaici residenziali, commerciali e con sistemi di accumulo. Richiedi un preventivo gratuito!',
};

// Placeholder per i dati che potrebbero venire da un CMS o API
const companyData = {
  name: "BinderEcowatt",
  companyName: "Elettro Impianti srl",
  address: "Via Risorgimento 2, Vigonovo (VE), 30030",
  vatNumber: "04820420273",
  email: "binderecowatt@gmail.com",
  phone: "3277949182", // Aggiunto dopo il messaggio dell'utente
  domain: "http://binderecowatt.it/"
};

export default function ImpiantiFotovoltaiciPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (si potrebbe importare come componente) */}
      <header className="bg-green-700 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" legacyBehavior><a className="text-3xl font-bold">{companyData.name}</a></Link>
          <nav>
            <Link href="/" legacyBehavior><a className="px-3 hover:text-green-300">Home</a></Link>
            <Link href="/impianti-fotovoltaici" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Impianti Fotovoltaici</a></Link>
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
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Soluzioni per Impianti Fotovoltaici</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            L'energia solare è una risorsa pulita, rinnovabile e sempre più conveniente. In BinderEcowatt, progettiamo e installiamo impianti fotovoltaici personalizzati per soddisfare le esigenze energetiche di privati e aziende, contribuendo a un futuro più sostenibile e a un significativo risparmio in bolletta.
          </p>
        </section>

        <section className="py-10 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Le Nostre Tipologie di Impianti</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            {/* Impianti Residenziali */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">Impianti Fotovoltaici Residenziali</h3>
              <p className="text-gray-600 mb-4 flex-grow">Soluzioni su misura per la tua casa, villetta o condominio. Massimizza l'autoconsumo, riduci i costi energetici e aumenta il valore del tuo immobile con un impianto fotovoltaico efficiente e affidabile.</p>
              {/* Immagine placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">Immagine impianto residenziale</div>
              <Link href="/contatti?servizio=fotovoltaico_residenziale" legacyBehavior>
                <a className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center transition duration-300">Richiedi Sopralluogo</a>
              </Link>
            </div>

            {/* Impianti Commerciali e Industriali */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">Impianti per Aziende e Industrie</h3>
              <p className="text-gray-600 mb-4 flex-grow">Progettiamo impianti fotovoltaici per capannoni, uffici, attività agricole e commerciali, ottimizzando i consumi e riducendo l'impatto ambientale della tua attività. Soluzioni potenti e scalabili per ogni esigenza produttiva.</p>
              {/* Immagine placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">Immagine impianto aziendale</div>
              <Link href="/contatti?servizio=fotovoltaico_aziendale" legacyBehavior>
                <a className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center transition duration-300">Consulenza Dedicata</a>
              </Link>
            </div>

            {/* Impianti con Sistemi di Accumulo */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">Fotovoltaico con Accumulo</h3>
              <p className="text-gray-600 mb-4 flex-grow">Aumenta la tua indipendenza energetica con i sistemi di accumulo (batterie). Immagazzina l'energia prodotta in eccesso durante il giorno per utilizzarla quando ne hai più bisogno, anche di sera o in caso di blackout.</p>
              {/* Immagine placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">Immagine batterie accumulo</div>
              <Link href="/contatti?servizio=fotovoltaico_accumulo" legacyBehavior>
                <a className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center transition duration-300">Scopri i Vantaggi</a>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Qualità e Affidabilità Garantite</h2>
          <div className="max-w-4xl mx-auto text-gray-700">
            <p className="mb-4">Utilizziamo solo componenti di alta qualità dai migliori produttori sul mercato, inclusi pannelli solari ad alta efficienza, inverter performanti e sistemi di accumulo di ultima generazione. Ogni installazione è curata nei minimi dettagli da tecnici specializzati per garantire la massima resa e durata nel tempo.</p>
            <p className="mb-4">Il nostro processo include:</p>
            <ul className="list-disc list-inside mb-6 pl-4 space-y-2">
              <li>Consulenza personalizzata e sopralluogo tecnico gratuito.</li>
              <li>Progettazione su misura dell'impianto in base ai tuoi consumi e alle caratteristiche dell'immobile.</li>
              <li>Gestione completa delle pratiche burocratiche e richieste di incentivi.</li>
              <li>Installazione a regola d'arte e collaudo dell'impianto.</li>
              <li>Assistenza post-vendita e piani di manutenzione dedicati.</li>
            </ul>
            <div className="text-center">
                <Link href="/contatti" legacyBehavior>
                    <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">Parla con un Esperto</a>
                </Link>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-100 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Incentivi Fiscali e Finanziamenti</h2>
          <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Approfitta degli incentivi statali e delle detrazioni fiscali per rendere il tuo impianto fotovoltaico ancora più conveniente. Ti supportiamo nella comprensione delle normative vigenti e nella scelta delle migliori soluzioni di finanziamento.
          </p>
           {/* Qui si potrebbero inserire loghi di partner finanziari o link a risorse ufficiali */}
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Domande Frequenti (FAQ)</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-semibold text-lg text-green-700">Quanto costa un impianto fotovoltaico?</summary>
              <p className="mt-2 text-gray-600">Il costo varia in base a dimensioni, tipologia di pannelli e complessità dell'installazione. Offriamo preventivi gratuiti e personalizzati.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-semibold text-lg text-green-700">Quanto posso risparmiare in bolletta?</summary>
              <p className="mt-2 text-gray-600">Il risparmio dipende dai tuoi consumi e dalla produzione dell'impianto. Generalmente si può arrivare a coprire una parte significativa del fabbisogno energetico.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-semibold text-lg text-green-700">Quanto dura un impianto fotovoltaico?</summary>
              <p className="mt-2 text-gray-600">I pannelli solari di qualità hanno una vita utile di oltre 25-30 anni, con garanzie sulla produzione.</p>
            </details>
            {/* Aggiungere altre FAQ */}
          </div>
        </section>

      </main>

      {/* Footer (si potrebbe importare come componente) */}
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

