import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { futuraMedium } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Futur Media",
  description: "Futur Media Spa est une entreprise de communication multimédia locale, spécialisée dans le grand affichage publicitaire. Présente en Algérie depuis 2002, elle a été rachetée par le groupe Cevital en 2008. Futur Media propose à ses clients des solutions de communication innovantes, qui ont de l`impact et qui garantissent le succès de leurs campagnes publicitaires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={futuraMedium.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}