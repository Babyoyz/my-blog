import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false, 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  interface Url {
    name: string;
    url: string;
  }

  const Url: Url[] = [];

  const InitUrl = () => {
    Url.push(
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Blog",
        url: "/blog",
      },
      {
        name: "Resume",
        url: "https://babyoyz.github.io/my-app-port/"
      }
    );
  };
  InitUrl();
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className="bg-blue-50 dark:bg-gray-400">
        <Navbar urls={Url} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
