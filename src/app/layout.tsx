import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Footer from "../components/footer";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sid Wachche",
  description: "Sid Wachche",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "text-slate-700 ")}>
        <Header />
        <section className="lg:pl-20 lg:pr-10 px-10 py-24 w-screen font-light">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
