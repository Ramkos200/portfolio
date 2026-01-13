import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { FloatingElements } from "@/components/shared/FloatingElements";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Digital Gardener Portfolio",
  description: "Organic, flowing digital experiences cultivated with care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Organic background */}
        <FloatingElements />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <footer className="relative z-10 py-12 px-4 text-center text-emerald-800/60">
          <p className="text-sm">
            © {new Date().getFullYear()}MHD.Rami Samhouri. A Journey to keep
            learning.
          </p>
        </footer>
      </body>
    </html>
  );
}
