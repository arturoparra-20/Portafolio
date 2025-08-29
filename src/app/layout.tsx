import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal de Arturo Parra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="overflow-x-hidden"> 
      <body
        className={`${inter.className} flex flex-col min-h-screen w-full`}
      >
        <Navbar />
        <main className="flex-grow w-full">
          <div className="w-full aspect-video">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
