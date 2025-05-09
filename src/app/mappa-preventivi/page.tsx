"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const companyData = {
  name: "BinderEcowatt",
  companyName: "Elettro Impianti srl",
  address: "Via Risorgimento 2, Vigonovo (VE), 30030",
  vatNumber: "04820420273",
  email: "binderecowatt@gmail.com",
  phone: "3277949182",
  domain: "http://binderecowatt.it/"
};

const InteractiveMap = ()  => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [mapSvg, setMapSvg] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    fetch('/mappa_italia_regioni.svg')
      .then(response => response.text())
      .then(data => setMapSvg(data))
      .catch(error => console.error('Errore caricamento mappa SVG:', error));
  }, []);

  useEffect(() => {
    if (mapSvg && mapContainerRef.current) {
      const svgElement = mapContainerRef.current.querySelector('svg');
      if (svgElement) {
        svgElement.setAttribute('class', 'w-full h-auto stroke-white stroke-1');
        const paths = svgElement.querySelectorAll('path');
        paths.forEach(path => {
          path.setAttribute('class', 'fill-green-500 hover:fill-green-700 transition-colors duration-200 cursor-pointer');
          const regionName = path.getAttribute('name') || path.id;
          path.addEventListener('click', () => {
            setSelectedRegion(regionName);
            setSubmitStatus('idle');
            setSubmitMessage('');
          });
        });
      }
    }
  }, [mapSvg]);

  const handlePreventivoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('pending');
    setSubmitMessage('');

    if (!selectedRegion) {
      setSubmitStatus('error');
      setSubmitMessage('Errore: Regione non selezionata.');
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append('regione', selectedRegion);

    try {
      const response = await fetch("/api/submit-preventivo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Richiesta di preventivo inviata con successo! Grazie.');
        (event.target as HTMLFormElement).reset();
      } else {
        let errorMessage = `Errore server: ${response.status}`;
        const responseText = await response.text(); 
        try {
          const errorData = JSON.parse(responseText); 
          if (typeof errorData === 'object' && errorData !== null) {
            if (typeof (errorData as any).error === 'string') {
              errorMessage = (errorData as any).error;
            } else if (typeof (errorData as any).message === 'string') {
              errorMessage = (errorData as any).message;
            }
          }
          console.error("Errore invio preventivo (risposta API non OK - JSON estratto):", response.status, errorData);
        } catch (jsonParseError) {
          errorMessage = responseText || `Errore ${response.status} - Risposta non JSON.`;
          console.error("Errore invio preventivo (risposta API non OK - Testo grezzo):", response.status, responseText);
        }
        setSubmitStatus('error');
        setSubmitMessage(`Si è verificato un errore: ${errorMessage}. Riprova più tardi.`);
      }
    } catch (error) {
      console.error("Errore invio preventivo (catch globale):", error);
      setSubmitStatus('error');
      setSubmitMessage('Si è verificato un errore di rete o di configurazione. Riprova più tardi.');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div ref={mapContainerRef} dangerouslySetInnerHTML={{ __html: mapSvg || '<p>Caricamento mappa...</p>' }} />
      {selectedRegion && (
        <div className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Preventivo per la regione: {selectedRegion}</h3>
          <p className="text-gray-600 mt-2 mb-4">Compila il form sottostante per ricevere un preventivo personalizzato.</p>
          <form className="mt-4 space-y-4" onSubmit={handlePreventivoSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">Nome e Cognome*</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email*</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left">Telefono</label>
              <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">Dettagli Richiesta*</label>
              <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={submitStatus === 'pending'}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:opacity-50"
            >
              {submitStatus === 'pending' ? 'Invio in corso...' : 'Invia Richiesta Preventivo'}
            </button>
            {submitMessage && (
              <p className={`mt-4 text-sm ${submitStatus === 'success' ? 'text-green-700' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      )}
      {!selectedRegion && (
         <div className="mt-6 p-4 bg-blue-100 border border-blue-400 rounded-lg text-center">
            <p className="text-blue-700">Clicca su una regione sulla mappa per iniziare la tua richiesta di preventivo.</p>
        </div>
      )}
    </div>
  );
};

export default function MappaPreventiviPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-700 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" legacyBehavior><a className="text-3xl font-bold">{companyData.name}</a></Link>
          <nav>
            <Link href="/" legacyBehavior><a className="px-3 hover:text-green-300">Home</a></Link>
            <Link href="/impianti-fotovoltaici" legacyBehavior><a className="px-3 hover:text-green-300">Impianti Fotovoltaici</a></Link>
            <Link href="/sistemi-iot" legacyBehavior><a className="px-3 hover:text-green-300">Sistemi IoT</a></Link>
            <Link href="/mappa-preventivi" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Mappa Preventivi</a></Link>
            <Link href="/manutenzione" legacyBehavior><a className="px-3 hover:text-green-300">Manutenzione</a></Link>
            <Link href="/chi-siamo" legacyBehavior><a className="px-3 hover:text-green-300">Chi Siamo</a></Link>
            <Link href="/blog" legacyBehavior><a className="px-3 hover:text-green-300">Blog</a></Link>
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Richiedi un Preventivo tramite Mappa</h1>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Seleziona la tua regione sulla mappa interattiva dell'Italia per accedere al form di richiesta preventivo. Ti forniremo una consulenza personalizzata e una stima dei costi per il tuo impianto fotovoltaico o sistema di monitoraggio IoT.
          </p>
          <InteractiveMap />
        </section>
        
        <section className="py-10 bg-gray-50 rounded-lg shadow-lg mt-12">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Perché Richiedere un Preventivo?</h2>
            <div className="max-w-3xl mx-auto text-gray-700 space-y-4 px-4">
                <p>Un preventivo personalizzato ti permette di:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Comprendere i costi specifici per la tua situazione.</li>
                    <li>Valutare il potenziale risparmio energetico.</li>
                    <li>Scoprire le soluzioni tecnologiche più adatte alle tue esigenze.</li>
                    <li>Conoscere i tempi di installazione e le garanzie offerte.</li>
                    <li>Ricevere una consulenza esperta senza impegno.</li>
                </ul>
                <p className="mt-4">Il nostro team è a tua disposizione per analizzare le tue necessità e proporti la migliore soluzione per un futuro energetico più efficiente e sostenibile.</p>
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
        </div>
      </footer>
    </div>
  );
}
