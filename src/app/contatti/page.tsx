"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('pending');
    setSubmitMessage('');

    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams(formData as any).toString();

    try {
      const response = await fetch("/api/submit-form", { // Punta alla nuova API route
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Messaggio inviato con successo! Grazie.');
        (event.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json().catch(() => ({ message: "Errore sconosciuto dal server." }));
        console.error("Errore invio form (risposta API non OK):", response.status, errorData);
        setSubmitStatus('error');
        setSubmitMessage(`Si è verificato un errore: ${errorData.message || response.statusText}. Riprova più tardi.`);
      }
    } catch (error) {
      console.error("Errore invio form (catch globale):", error);
      setSubmitStatus('error');
      setSubmitMessage('Si è verificato un errore di rete o di configurazione. Riprova più tardi.');
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
            <Link href="/manutenzione" legacyBehavior><a className="px-3 hover:text-green-300">Manutenzione</a></Link>
            <Link href="/chi-siamo" legacyBehavior><a className="px-3 hover:text-green-300">Chi Siamo</a></Link>
            <Link href="/blog" legacyBehavior><a className="px-3 hover:text-green-300">Blog</a></Link>
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Contatti</a></Link>
            <Link href="/mappa-preventivi" legacyBehavior><a className="px-3 hover:text-green-300">Mappa Preventivi</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <section className="relative bg-green-600 text-white py-20">
          <div className="absolute inset-0">
            <Image
              src="/images/iot_internet_of_things.jpeg"
              alt="Contattaci per soluzioni energetiche"
              layout="fill"
              objectFit="cover"
              quality={70}
              className="opacity-30"
            />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mettiti in Contatto</h1>
            <p className="text-lg md:text-xl mb-8">Siamo qui per rispondere a tutte le tue domande e aiutarti a trovare la soluzione migliore.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Inviaci un Messaggio</h2>
                <form
                  name="contact" 
                  onSubmit={handleFormSubmit}
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Non compilare questo campo se sei umano: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="mb-4">
                    <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-2">Nome Completo*</label>
                    <input type="text" id="contact-name" name="contact-name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-2">Email*</label>
                      <input type="email" id="contact-email" name="contact-email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-gray-700 font-medium mb-2">Telefono</label>
                      <input type="tel" id="contact-phone" name="contact-phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-subject" className="block text-gray-700 font-medium mb-2">Oggetto*</label>
                    <input type="text" id="contact-subject" name="contact-subject" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-2">Messaggio*</label>
                    <textarea id="contact-message" name="contact-message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"></textarea>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="privacy" className="flex items-center text-gray-700">
                      <input type="checkbox" id="privacy" name="privacy" required className="mr-2 h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                      <span>Ho letto e accetto l'<Link href="/privacy-policy" legacyBehavior><a className="text-green-600 hover:underline">informativa sulla privacy</a></Link>*</span>
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={submitStatus === 'pending'}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
                    >
                      {submitStatus === 'pending' ? 'Invio in corso...' : 'Invia Messaggio'}
                    </button>
                  </div>
                  {submitMessage && (
                    <p className={`mt-4 text-sm ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Informazioni di Contatto</h3>
                  <p className="text-gray-600 mb-2"><strong>Indirizzo:</strong> {companyData.address}</p>
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href={`mailto:${companyData.email}`} className="text-green-600 hover:underline">{companyData.email}</a></p>
                  <p className="text-gray-600 mb-4"><strong>Telefono:</strong> <a href={`tel:${companyData.phone}`} className="text-green-600 hover:underline">{companyData.phone}</a></p>
                  <p className="text-gray-600">Siamo disponibili per sopralluoghi e consulenze. Non esitare a contattarci!</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Orari di Apertura</h3>
                  <p className="text-gray-600">Lunedì - Venerdì: 09:00 - 18:00</p>
                  <p className="text-gray-600">Sabato: 09:00 - 13:00 (solo su appuntamento)</p>
                  <p className="text-gray-600">Domenica: Chiuso</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-xl h-64 relative overflow-hidden">
                   <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dove Trovarci</h3>
                   <div className="absolute inset-0">
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
