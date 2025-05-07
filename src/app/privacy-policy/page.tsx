import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - BinderEcowatt',
  description: 'Leggi la nostra informativa sulla privacy per capire come BinderEcowatt (Elettro Impianti srl) raccoglie, utilizza e protegge i tuoi dati personali.',
  robots: 'noindex, nofollow', // Generalmente le policy non necessitano di indicizzazione spinta
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

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Informativa sulla Privacy</h1>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-700 space-y-6">
            <p><strong>Ultimo aggiornamento: 7 Maggio 2025</strong></p>
            
            <p>{companyData.companyName}, con sede in {companyData.address} (di seguito "Titolare"), in qualità di titolare del trattamento, La informa ai sensi dell’art. 13 Regolamento UE n. 2016/679 (di seguito, "GDPR") che i Suoi dati saranno trattati con le modalità e per le finalità seguenti.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">1. Oggetto del Trattamento</h2>
            <p>Il Titolare tratta i dati personali, identificativi (ad esempio, nome, cognome, ragione sociale, indirizzo, telefono, e-mail, riferimenti bancari e di pagamento) – in seguito, “dati personali” o anche “dati” – da Lei comunicati in occasione della conclusione di contratti per i servizi del Titolare o tramite la compilazione di form di contatto sul sito {companyData.domain}.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">2. Finalità del Trattamento</h2>
            <p>I Suoi dati personali sono trattati:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Senza il Suo consenso espresso (art. 6 lett. b), e) GDPR), per le seguenti Finalità di Servizio:
                <ul className="list-circle list-inside pl-6">
                  <li>concludere i contratti per i servizi del Titolare;</li>
                  <li>adempiere agli obblighi precontrattuali, contrattuali e fiscali derivanti da rapporti con Lei in essere;</li>
                  <li>adempiere agli obblighi previsti dalla legge, da un regolamento, dalla normativa comunitaria o da un ordine dell’Autorità;</li>
                  <li>esercitare i diritti del Titolare, ad esempio il diritto di difesa in giudizio.</li>
                </ul>
              </li>
              <li>Solo previo Suo specifico e distinto consenso (art. 7 GDPR), per le seguenti Finalità di Marketing:
                <ul className="list-circle list-inside pl-6">
                  <li>inviarLe via e-mail, posta e/o sms e/o contatti telefonici, newsletter, comunicazioni commerciali e/o materiale pubblicitario su prodotti o servizi offerti dal Titolare e rilevazione del grado di soddisfazione sulla qualità dei servizi;</li>
                  <li>inviarLe via e-mail, posta e/o sms e/o contatti telefonici comunicazioni commerciali e/o promozionali di soggetti terzi (ad esempio, business partner).</li>
                </ul>
              </li>
            </ul>
            <p>Le segnaliamo che se siete già nostri clienti, potremo inviarLe comunicazioni commerciali relative a servizi e prodotti del Titolare analoghi a quelli di cui ha già usufruito, salvo Suo dissenso (art. 130 c. 4 Codice Privacy).</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">3. Modalità di Trattamento</h2>
            <p>Il trattamento dei Suoi dati personali è realizzato per mezzo delle operazioni indicate all’art. 4 n. 2) GDPR e precisamente: raccolta, registrazione, organizzazione, conservazione, consultazione, elaborazione, modificazione, selezione, estrazione, raffronto, utilizzo, interconnessione, blocco, comunicazione, cancellazione e distruzione dei dati. I Suoi dati personali sono sottoposti a trattamento sia cartaceo che elettronico e/o automatizzato.</p>
            <p>Il Titolare tratterà i dati personali per il tempo necessario per adempiere alle finalità di cui sopra e comunque per non oltre 10 anni dalla cessazione del rapporto per le Finalità di Servizio e per non oltre 2 anni dalla raccolta dei dati per le Finalità di Marketing.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">4. Accesso ai Dati</h2>
            <p>I Suoi dati potranno essere resi accessibili per le finalità di cui all’art. 2.A) e 2.B):</p>
            <ul className="list-disc list-inside pl-4">
              <li>a dipendenti e collaboratori del Titolare, nella loro qualità di incaricati e/o responsabili interni del trattamento e/o amministratori di sistema;</li>
              <li>a società terze o altri soggetti (a titolo indicativo, istituti di credito, studi professionali, consulenti, società di assicurazione per la prestazione di servizi assicurativi, etc.) che svolgono attività in outsourcing per conto del Titolare, nella loro qualità di responsabili esterni del trattamento.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">5. Comunicazione dei Dati</h2>
            <p>Senza la necessità di un espresso consenso (art. 6 lett. b) e c) GDPR), il Titolare potrà comunicare i Suoi dati per le finalità di cui all’art. 2.A) a Organismi di vigilanza, Autorità giudiziarie, nonché a quei soggetti ai quali la comunicazione sia obbligatoria per legge per l’espletamento delle finalità dette. Detti soggetti tratteranno i dati nella loro qualità di autonomi titolari del trattamento. I Suoi dati non saranno diffusi.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">6. Trasferimento Dati</h2>
            <p>La gestione e la conservazione dei dati personali avverrà su server ubicati all’interno dell’Unione Europea del Titolare e/o di società terze incaricate e debitamente nominate quali Responsabili del Trattamento. Attualmente i server sono situati in Italia. I dati non saranno oggetto di trasferimento al di fuori dell’Unione Europea.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">7. Natura del Conferimento dei Dati e Conseguenze del Rifiuto di Rispondere</h2>
            <p>Il conferimento dei dati per le finalità di cui all’art. 2.A) è obbligatorio. In loro assenza, non potremo garantirLe i Servizi dell’art. 2.A). Il conferimento dei dati per le finalità di cui all’art. 2.B) è invece facoltativo. Può quindi decidere di non conferire alcun dato o di negare successivamente la possibilità di trattare dati già forniti: in tal caso, non potrà ricevere newsletter, comunicazioni commerciali e materiale pubblicitario inerenti ai Servizi offerti dal Titolare. Continuerà comunque ad avere diritto ai Servizi di cui all’art. 2.A).</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">8. Diritti dell’Interessato</h2>
            <p>Nella Sua qualità di interessato, ha i diritti di cui all’art. 15 GDPR e precisamente i diritti di:</p>
            <ul className="list-disc list-inside pl-4">
              <li>ottenere la conferma dell'esistenza o meno di dati personali che La riguardano;</li>
              <li>ottenere l'indicazione: a) dell'origine dei dati personali; b) delle finalità e modalità del trattamento; c) della logica applicata in caso di trattamento effettuato con l'ausilio di strumenti elettronici; d) degli estremi identificativi del titolare, dei responsabili e del rappresentante designato ai sensi dell'art. 3, comma 1, GDPR; e) dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati;</li>
              <li>ottenere: a) l'aggiornamento, la rettificazione ovvero, quando vi ha interesse, l'integrazione dei dati; b) la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati; c) l'attestazione che le operazioni di cui alle lettere a) e b) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato;</li>
              <li>opporsi, in tutto o in parte: a) per motivi legittimi al trattamento dei dati personali che La riguardano, ancorché pertinenti allo scopo della raccolta; b) al trattamento di dati personali che La riguardano a fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di ricerche di mercato o di comunicazione commerciale, mediante l’uso di sistemi automatizzati di chiamata senza l’intervento di un operatore mediante e-mail e/o mediante modalità di marketing tradizionali mediante telefono e/o posta cartacea.</li>
            </ul>
            <p>Ove applicabili, ha altresì i diritti di cui agli artt. 16-21 GDPR (Diritto di rettifica, diritto oblivion, diritto di limitazione di trattamento, diritto alla portabilità dei dati, diritto di opposizione), nonché il diritto di reclamo all’Autorità Garante.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">9. Modalità di Esercizio dei Diritti</h2>
            <p>Potrà in qualsiasi momento esercitare i diritti inviando una comunicazione via e-mail all’indirizzo {companyData.email}.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">10. Titolare, Responsabile e Incaricati</h2>
            <p>Il Titolare del trattamento è {companyData.companyName}. L’elenco aggiornato dei responsabili e degli incaricati al trattamento è custodito presso la sede legale del Titolare del trattamento.</p>
            
            <p className="mt-8"><em>Questa è una policy generica e dovrebbe essere revisionata da un consulente legale per assicurare la piena conformità con le normative vigenti e le specifiche necessità aziendali.</em></p>
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

