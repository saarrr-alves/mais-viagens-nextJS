import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Mais Viagens",
  description: "Encontre as melhores ofertas de viagens aqui!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="container">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
