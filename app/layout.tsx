import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Umair | CFD & FEA Engineer — Aerospace & Thermal Engineering Specialist",
    template: "%s | Umair Engineering",
  },
  description:
    "Expert CFD & FEA simulation engineer specialising in ANSYS Fluent, structural analysis, aeronautical and thermal engineering. 5+ years of academic teaching. Research support, thesis writing, and engineering consultancy services.",
  keywords: [
    "CFD Engineer",
    "FEA Engineer",
    "ANSYS Expert",
    "Thermal Engineer",
    "Aeronautical Engineer",
    "Engineering Consultant",
    "Online Engineering Tutor",
    "ANSYS Fluent",
    "Computational Fluid Dynamics",
    "Finite Element Analysis",
    "Aircraft Design",
    "Aerospace Engineer",
    "Simulation Engineer",
  ],
  authors: [{ name: "Umair" }],
  creator: "Umair",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Umair | CFD & FEA Engineer | Aerospace & Thermal Engineering",
    description:
      "Premium engineering portfolio — CFD, FEA, aircraft design, thermal analysis, and research support services.",
    siteName: "Umair Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair | CFD & FEA Aerospace Engineer",
    description:
      "Expert in CFD, FEA, aircraft design, and thermal engineering. ANSYS, SolidWorks, CATIA specialist.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#F7F6F3] text-[#222222] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
