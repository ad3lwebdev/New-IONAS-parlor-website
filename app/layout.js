import { Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata = {
  title: "New Iona's Refreshment Parlor | Infanta, Quezon since 1977",
  description: "Infanta's family table since 1977. Carabeef steak, batukarit sisig, sinigang na isda — heritage Filipino comfort food in Poblacion, Infanta, Quezon.",
  keywords: [
    "New Iona's Refreshment Parlor",
    "Infanta Quezon restaurant",
    "Infanta food",
    "Poblacion 38 Infanta",
    "Quezon heritage restaurant",
  ],
  openGraph: {
    title: "New Iona's Refreshment Parlor | Infanta, Quezon since 1977",
    description:
      "The family table Infanta comes home to. Serving heritage Filipino dishes since 1977.",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
