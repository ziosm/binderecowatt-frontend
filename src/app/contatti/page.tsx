"use client"; // Necessario per usare useState e gestire eventi client-side

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next'; // Metadata può rimanere se la pagina ha anche contenuto statico
import { useState } from 'react'; // Importa useState

// Se vuoi che il titolo e la descrizione siano dinamici o gestiti a livello di layout, 
// altrimenti per pagine client-side pure potresti non aver bisogno di esportare Metadata qui.
// Per ora lo lasciamo, Next.js è abbastanza flessibile.
/*
export const metadata: Metadata = {
  title: 'Contatti - BinderEcowatt',
  description: 'Contatta BinderEcowatt (Elettro Impianti srl) per informazioni, sopralluoghi o preventivi gratuiti per impianti fotovoltaici e sistemi IoT.',
};
*/

const companyData = {
  name: "BinderEcowatt",
  companyName: "Elettro Impianti srl",
  address: "Via Risorgimento 2, Vigonovo (VE), 30030",
  vatNumber: "04820420273",
  email: "binderecowatt@gmail.com",
  phone: "3277949182",
  domain: "http://binderecowatt.it/"
};

export default function ContattiPage()  {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus('invio');
    const formData = new FormData(event.currentTarget);

    // const response = await fetch("/netlify-forms-declarations.html", { // VECCHIA RIGA
const response = await fetch("/api/submit-form", { // NUOVA RIGA

    // ma l'invio effettivo per Netlify Forms deve andare al percorso del file HTML statico
    // che Netlify usa per il rilevamento, NON al nome del form stesso.
    // Il file che abbiamo creato è public/netlify-forms-declarations.html
    // quindi il target del fetch sarà "/netlify-forms-declarations.html"

    try {
      const response = await fetch("/netlify-forms-declarations.html", { // Punta al file HTML statico
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        (event.target as HTMLFormElement).reset(); // Resetta il form dopo l'invio
        // Potresti reindirizzare a una pagina di successo qui se preferisci
        // window.location.href = '/success'; 
      } else {
        // Anche se la risposta non è ok, Netlify potrebbe aver comunque processato il form.
        // La gestione degli errori qui è più per problemi di rete o configurazioni errate gravi.
        // Netlify di solito gestisce gli errori di validazione del form da solo.
        console.error("Errore nell'invio del form, risposta non OK", response);
        const responseText = await response.text();
        console.error("Testo della risposta d'errore:", responseText);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Errore durante il fetch del form:", error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
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
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="relative py-16 text-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <Image src="/images/iot_internet_of_things.jpeg" alt="Contattaci per soluzioni energetiche intelligenti" layout="fill" objectFit="cover" quality={75} className="opacity-50" />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-green-700 mb-10">Contattaci</h1>
            <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto">
              Hai domande, desideri un sopralluogo tecnico o vuoi richiedere un preventivo gratuito e personalizzato? Il nostro team è a tua completa disposizione. Compila il modulo sottostante o utilizza i nostri recapiti diretti.
            </p>
          </div>
        </section>

        <section className="py-10 bg-gray-50 rounded-lg shadow-lg mt-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Invia un Messaggio</h2>
                {/* Modulo di Contatto aggiornato per invio tramite JS */}
                {/* Il name="contact" qui è per coerenza, ma Netlify usa quello nel file HTML statico */}
                <form name="contact" onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Campo nascosto per il nome del form, richiesto da Netlify Forms se non usi data-netlify="true" qui */}
                  {/* Ma dato che inviamo a un endpoint statico che ha già il form definito, questo potrebbe non essere strettamente necessario qui,
                      tuttavia, includerlo per sicurezza non fa male. */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Non serve più data-netlify="true" o data-netlify-honeypot qui perché gestito dal file statico e JS */}
                  {/* Non serve più l'honeypot qui nel JSX se il file statico lo dichiara */}

                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Nome e Cognome*</label>
                    <input type="text" name="contact-name" id="contact-name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email*</label>
                    <input type="email" name="contact-email" id="contact-email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">Telefono</label>
                    <input type="tel" name="contact-phone" id="contact-phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">Oggetto</label>
                    <input type="text" name="contact-subject" id="contact-subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Messaggio*</label>
                    <textarea name="contact-message" id="contact-message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
                  </div>
                  <div>
                    <input type="checkbox" name="privacy" id="privacy" required className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">Ho letto e accetto l'<Link href="/privacy-policy" legacyBehavior><a className="underline hover:text-green-700">informativa sulla privacy</a></Link>*</label>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300" disabled={submissionStatus === 'invio'}>
                      {submissionStatus === 'invio' ? 'Invio in corso...' : 'Invia Messaggio'}
                    </button>
                  </div>
                  {submissionStatus === 'success' && (
                    <p className="text-green-600 font-semibold">Messaggio inviato con successo! Grazie.</p>
                  )}
                  {submissionStatus === 'error' && (
                    <p className="text-red-600 font-semibold">Si è verificato un errore. Riprova più tardi.</p>
                  )}
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">I Nostri Recapiti</h2>
                  <p className="text-gray-700 mb-2"><strong>{companyData.companyName}</strong></p>
                  <p className="text-gray-700 mb-2">{companyData.address}</p>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> <a href={`mailto:${companyData.email}`} className="text-green-600 hover:underline">{companyData.email}</a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Telefono:</strong> <a href={`tel:${companyData.phone}`} className="text-green-600 hover:underline">{companyData.phone}</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>P.IVA:</strong> {companyData.vatNumber}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dove Trovarci</h2>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                    <Image src="/images/services_solar_panels.jpeg" alt="Mappa indicativa della nostra sede" layout="fill" objectFit="cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} {companyData.companyName} - P.IVA {companyData.vatNumber}</p>
          <p>{companyData.address}</p>
          <p>Email: <a href={`mailto:${companyData.email}`} className="hover:text-green-300">{companyData.email}</a> | Tel: <a href={`tel:${companyData.phone}`} className="hover:text-green-300">{companyData.phone}</a></p>
          <p><Link href="/privacy-policy" legacyBehavior><a className="hover:text-green-300">Privacy Policy</a></Link> | <Link href="/cookie-policy" legacyBehavior><a className="hover:text-green-300">Cookie Policy</a></Link></p>
          <p>Sito web: <a href={companyData.domain} target="_blank" rel="noopener noreferrer" className="hover:text-green-300">{companyData.domain}</a></p>
          <p className="text-xs mt-4">Immagini da Pixabay e Freepik</p>
        </div>
      </footer>
    </div>
  );
}
