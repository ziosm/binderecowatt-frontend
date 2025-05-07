import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - BinderEcowatt',
  description: 'Informativa sull\'uso dei cookie sul sito BinderEcowatt (Elettro Impianti srl).',
  robots: 'noindex, nofollow',
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

export default function CookiePolicyPage()  {
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
            <Link href="/blog" legacyBehavior><a className="px-3 hover:text-green-300">Blog</a></Link>
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Cookie Policy</h1>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-700 space-y-6">
            <p><strong>Ultimo aggiornamento: 7 Maggio 2025</strong></p>
            
            <p>La presente Cookie Policy ha lo scopo di descrivere le modalità di gestione del sito {companyData.domain} (di seguito "Sito"), in riferimento all’uso dei cookie e al trattamento dei dati personali degli utenti che lo consultano.</p>
            <p>{companyData.companyName}, con sede in {companyData.address}, in qualità di Titolare del trattamento dei dati personali (di seguito "Titolare"), fornisce le seguenti informazioni.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">1. Cosa sono i Cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. Nel corso della navigazione su un sito, l'utente può ricevere sul suo terminale anche cookie di siti o di web server diversi (c.d. cookie di "terze parti"); ciò accade perché sul sito web visitato possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello sul quale si trova la pagina richiesta.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">2. Tipologie di Cookie Utilizzate dal Sito</h2>
            <p>Il Sito utilizza le seguenti tipologie di cookie:</p>
            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>Cookie Tecnici (strettamente necessari):</strong> Questi cookie sono essenziali per consentire la navigazione nel Sito e l’utilizzo delle sue funzionalità. Non raccolgono informazioni personali sull’utente che potrebbero essere utilizzate per fini di marketing né ricordano i siti visitati su Internet. Questa categoria di cookie non può essere disabilitata.
                <ul className="list-circle list-inside pl-6">
                    <li>Cookie di navigazione o di sessione: garantiscono la normale navigazione e fruizione del sito web.</li>
                    <li>Cookie di funzionalità: permettono all’utente la navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua) al fine di migliorare il servizio reso allo stesso.</li>
                </ul>
              </li>
              <li>
                <strong>Cookie Analitici (di terze parti, es. Google Analytics):</strong> Questi cookie sono utilizzati per raccogliere informazioni in forma aggregata e anonima sul numero degli utenti e su come questi visitano il sito stesso (pagine visitate, numero di accessi, tempo di permanenza sul sito, ecc.). Queste informazioni ci aiutano a capire come migliorare il Sito. Per questi cookie, il Sito ha adottato strumenti che riducono il potere identificativo dei cookie (anonimizzazione dell’indirizzo IP) e la terza parte non incrocia le informazioni raccolte con altre di cui già dispone.
                <p className="mt-2">Per maggiori informazioni su Google Analytics e per disabilitare i relativi cookie, è possibile consultare i seguenti link:</p>
                <ul className="list-circle list-inside pl-6">
                    <li><a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Privacy Policy di Google</a></li>
                    <li><a href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Componente aggiuntivo del browser per la disattivazione di Google Analytics</a></li>
                </ul>
              </li>
              <li>
                <strong>Cookie di Profilazione (eventuali, di terze parti) :</strong> Questi cookie sono volti a creare profili relativi all’utente e vengono utilizzati al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dallo stesso nell’ambito della navigazione in rete. Il Sito attualmente NON utilizza direttamente cookie di profilazione propri. L’eventuale utilizzo di cookie di profilazione da parte di terze parti (es. social network, banner pubblicitari) è soggetto alle informative di tali terze parti.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">3. Gestione dei Cookie</h2>
            <p>L’utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione totale o parziale dei cookie tecnici potrebbe compromettere l’utilizzo ottimale del Sito. La disabilitazione dei cookie “di terze parti” non pregiudica in alcun modo la navigabilità.</p>
            <p>Le impostazioni per la gestione dei cookie possono essere definite in modo specifico per i diversi siti e applicazioni web. Inoltre, i migliori browser consentono di definire impostazioni diverse per i cookie “proprietari” e per quelli di “terze parti”.</p>
            <p>A titolo di esempio, in Firefox, attraverso il menu Strumenti-&gt;Opzioni-&gt;Privacy, è possibile accedere ad un pannello di controllo dove è possibile definire se accettare o meno i diversi tipi di cookie e procedere alla loro rimozione.</p>
            <ul className="list-disc list-inside pl-4">
                <li>Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://support.google.com/chrome/answer/95647?hl=it</a></li>
                <li>Firefox: <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</a></li>
                <li>Internet Explorer / Edge: <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                <li>Safari: <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://support.apple.com/it-it/guide/safari/sfri11471/mac</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">4. Consenso</h2>
            <p>Per i cookie che richiedono il consenso, alla prima visita del Sito l’utente visualizzerà un banner contenente una breve informativa e il link a questa Cookie Policy estesa. Chiudendo tale banner, scorrendo la pagina, cliccando su un link o proseguendo la navigazione in altra maniera, l’utente acconsente all’uso dei cookie per i quali è richiesto il consenso.</p>
            <p>L’utente ha la possibilità di modificare le proprie scelte in qualsiasi momento.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">5. Titolare del Trattamento</h2>
            <p>Il Titolare del trattamento è {companyData.companyName}, con sede in {companyData.address}. Per qualsiasi chiarimento o per esercitare i propri diritti, l’utente può contattare il Titolare all’indirizzo email: {companyData.email}.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">6. Modifiche alla Cookie Policy</h2>
            <p>Il Titolare si riserva il diritto di apportare modifiche alla presente Cookie Policy in qualunque momento dandone pubblicità agli utenti su questa pagina. Si prega dunque di consultare spesso questa pagina, prendendo come riferimento la data di ultima modifica indicata in alto.</p>
            
            <p className="mt-8"><em>Questa è una Cookie Policy generica e dovrebbe essere revisionata da un consulente legale per assicurare la piena conformità con le normative vigenti e le specifiche necessità aziendali, inclusa l'eventuale implementazione di un Consent Management Platform (CMP) .</em></p>
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

