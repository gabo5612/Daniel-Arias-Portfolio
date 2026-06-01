import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  style: ["normal", "italic"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Daniel Arias — Virtuoso Cellist",
  description:
    "Portfolio of Daniel Arias, professional cellist. Concert bookings, media, and press assets.",
  metadataBase: new URL("https://danielariascello.com"),
  openGraph: {
    title: "Daniel Arias — Cellist",
    description:
      "Portfolio of Daniel Arias, professional cellist. Concert bookings, media, and press assets.",
    url: "https://danielariascello.com",
    siteName: "Daniel Arias",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Daniel Arias — Cellist",
    description:
      "Portfolio of Daniel Arias, professional cellist. Concert bookings, media, and press assets.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${hankenGrotesk.variable}`}
    >
      <GoogleTagManager gtmId="GTM-NFVKRT32" />
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
