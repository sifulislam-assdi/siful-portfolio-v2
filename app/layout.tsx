import type { Metadata } from "next";
import { Poppins, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "SIFUL ISLAM | Video Editor, Graphic Designer & Meta Marketer",
  description:
    "Portfolio of Siful Islam — Video Editing, Graphic Design, Meta Marketing, and AI-assisted creative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        style={{
          fontFamily: "var(--font-poppins), var(--font-hind), sans-serif",
        }}
        className={`${poppins.variable} ${hindSiliguri.variable} bg-[#0B1120] text-[#F8FAFC] antialiased selection:bg-[#38BDF8] selection:text-[#0B1120]`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}