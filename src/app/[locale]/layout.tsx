import React from 'react';
import { ReactNode } from 'react';
import { cookies } from "next/headers";
import Providers from "../../../lib/Provider";
import "../globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";


interface Params {
  locale: string;
}

interface RootLayoutProps {
  children: ReactNode;
  params: Params;
}

export default function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  
  return (
    <>
      <html lang={locale}>
        <body
          style={{ direction: `${locale === "en" ? "ltr" : "rtl"}` }}
        >
          <Providers>
            <Navbar />
            {children}
            <Footer lang={locale} />
          </Providers>
        </body>
      </html>
    </>
  );
}