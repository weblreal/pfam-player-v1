import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const helveticaBold = localFont({
  src: "./fonts/Helvetica-Bold.ttf",
  variable: "--font-helveticaBold",
  weight: "100 900",
});
const helvetica = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-helvetica",
  weight: "100 900",
});
const arial = localFont({
  src: "./fonts/arial.ttf",
  variable: "--font-arial",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PFam player",
  description: "Playing our memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${helveticaBold.className} ${helvetica.className} ${arial.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
