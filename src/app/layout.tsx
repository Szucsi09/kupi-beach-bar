import type { Metadata } from "next";
import { DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KuPi Beach Bar — Igazi ételek a vízparton",
  description:
    "Friss alapanyagok, gondosan készített fogások közvetlenül a tó partján. KuPi Beach Bar — prémium strandétterem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="bg-white">
      <body className={`${dmSans.variable} ${pacifico.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
