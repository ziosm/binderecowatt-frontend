import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image'; // Importa il componente Image

export const metadata: Metadata = {
  title: 'Sistemi IoT per Monitoraggio Energetico - BinderEcowatt',
  description: 'Scopri le nostre soluzioni IoT per il monitoraggio intelligente dei consumi energetici e la gestione ottimizzata del tuo impianto fotovoltaico.',
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

export default function SistemiIoTPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header è gestito dal RootLayout ora */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Sistemi IoT per il Monitoraggio Energetico</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Rivoluziona la gestione dei tuoi consumi energetici con le nostre soluzioni IoT (Internet of Things). Monitora in tempo reale la produzione del tuo impianto fotovoltaico, controlla i consumi, individua sprechi e ottimizza l'efficienza energetica della tua casa o azienda.
          </p>
        </section>

        <section className="py-10 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Come Funzionano i Nostri Sistemi IoT</h2>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
            <p>I nostri sistemi di monitoraggio IoT utilizzano sensori intelligenti e gateway di comunicazione per raccogliere dati precisi sulla produzione e sul consumo di energia. Questi dati vengono trasmessi a una piattaforma software intuitiva, accessibile da web e mobile, dove potrai visualizzare grafici, report e ricevere notifiche personalizzate.</p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h4 className="text-xl font-semibold text-green-600 mb-2">Funzionalità Chiave:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Monitoraggio in tempo reale della produzione fotovoltaica.</li>
                        <li>Analisi dettagliata dei consumi per singolo elettrodomestico o area.</li>
                        <li>Rilevamento automatico di anomalie e potenziali guasti.</li>
                        <li>Notifiche e alert personalizzabili (es. superamento soglie, malfunzionamenti).</li>
                        <li>Reportistica avanzata sull'efficienza energetica e sul risparmio ottenuto.</li>
                        <li>Integrazione con sistemi di domotica e gestione intelligente dell'energia.</li>
                    </ul>
                </div>
                <div className="w-full h-64 relative rounded overflow-hidden">
                  <Image src="/placeholder-sistemi-iot.jpg" alt="Dashboard di Monitoraggio IoT" layout="fill" objectFit="contain" />
                </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Vantaggi del Monitoraggio Intelligente</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Massimizzazione dell'Autoconsumo</h3>
                    <p className="text-gray-600">Comprendi i tuoi pattern di consumo e adatta l'utilizzo dell'energia prodotta dal tuo impianto fotovoltaico per massimizzare l'autoconsumo e ridurre ulteriormente la dipendenza dalla rete.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Riduzione degli Sprechi</h3>
                    <p className="text-gray-600">Identifica facilmente gli elettrodomestici o le aree a maggior consumo e individua eventuali sprechi energetici, permettendoti di intervenire tempestivamente e risparmiare.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Diagnosi Precoce e Affidabilità</h3>
                    <p className="text-gray-600">Ricevi notifiche in caso di cali di produzione o malfunzionamenti del tuo impianto, consentendo una diagnosi precoce e interventi di manutenzione mirati per garantire sempre la massima efficienza.</p>
                </div>
            </div>
            <div className="text-center mt-10">
                <Link href="/contatti?servizio=sistemi_iot" legacyBehavior>
                    <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">Richiedi una Demo</a>
                </Link>
            </div>
        </section>

        <section className="py-10 bg-gray-100 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Galleria Immagini e Demo Interfacce</h2>
          <div className="text-center text-gray-600">
            <p>Qui verranno inserite immagini di screenshot delle dashboard di monitoraggio e, se disponibile, una demo interattiva o un video che mostri la piattaforma in azione.</p>
            <div className="flex flex-wrap justify-center space-x-4 mt-6">
                <div className="w-full sm:w-1/2 md:w-1/3 h-48 relative rounded mb-4 overflow-hidden">
                    <Image src="/placeholder-sistemi-iot.jpg" alt="Screenshot dashboard IoT 1" layout="fill" objectFit="cover" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 h-48 relative rounded mb-4 overflow-hidden">
                     <Image src="/placeholder-blog-3.jpg" alt="Screenshot dashboard IoT 2" layout="fill" objectFit="cover" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 h-48 relative rounded mb-4 overflow-hidden bg-gray-300 flex items-center justify-center text-gray-500">
                    {/* Placeholder per video o altra immagine */}
                    Video Demo / Altra Immagine
                </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Domande Frequenti (FAQ) sui Sistemi IoT</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-semibold text-lg text-green-700">I sistemi IoT sono compatibili con il mio impianto esistente?</summary>
              <p className="mt-2 text-gray-600">Molti dei nostri sistemi IoT possono essere integrati con impianti fotovoltaici esistenti. Contattaci per una valutazione specifica.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-semibold text-lg text-green-700">I miei dati sono al sicuro?</summary>
              <p className="mt-2 text-gray-600">La sicurezza e la privacy dei tuoi dati sono la nostra priorità. Utilizziamo protocolli di comunicazione sicuri e piattaforme conformi alle normative vigenti.</p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer è gestito dal RootLayout ora */}
       <footer className="bg-gray-800 text-white py-8 text-center mt-auto">
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

