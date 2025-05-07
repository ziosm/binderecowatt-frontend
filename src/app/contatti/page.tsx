import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti - BinderEcowatt',
  description: 'Contatta BinderEcowatt (Elettro Impianti srl) per informazioni, sopralluoghi o preventivi gratuiti per impianti fotovoltaici e sistemi IoT.',
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

export default function ContattiPage() {
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
            <Link href="/contatti" legacyBehavior><a className="px-3 hover:text-green-300 font-semibold">Contatti</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-12">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Contattaci</h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Hai domande, desideri un sopralluogo tecnico o vuoi richiedere un preventivo gratuito e personalizzato? Il nostro team è a tua completa disposizione. Compila il modulo sottostante o utilizza i nostri recapiti diretti.
          </p>
        </section>

        <section className="py-10 bg-gray-50 rounded-lg shadow-lg">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Modulo di Contatto */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Invia un Messaggio</h2>
                <form action="#" method="POST" className="space-y-6">
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
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                      Invia Messaggio
                    </button>
                  </div>
                </form>
              </div>

              {/* Recapiti Aziendali e Mappa */}
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
                  {/* Placeholder per Google Maps Embed */}
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Mappa Google Maps Integrata Qui
                    {/* Esempio: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.38..." width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
                  </div>
                </div>
              </div>
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

