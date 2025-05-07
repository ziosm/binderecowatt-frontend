import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Assicurati che Tailwind CSS sia importato qui

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BinderEcowatt - Impianti Fotovoltaici e Soluzioni IoT", // Titolo SEO generico, può essere sovrascritto per pagina
  description: "Vendita, installazione e manutenzione di impianti fotovoltaici e sistemi IoT per il monitoraggio energetico. Richiedi un preventivo gratuito!", // Descrizione SEO generica
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}

