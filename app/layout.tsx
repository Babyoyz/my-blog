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
  title: "Babyoyz || Main",
  description: "Generated by create next app",
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
      <body className="bg-blue-50 dark:bg-gray-400 overflow-auto h-80">
        <div className=" bg-blue-50 h-full ">
          <section className="mb-4 bg-blue-50">
            <div className=" sticky top-0 z-40">
              <Navbar urls={Url} />
            </div>
            <div className="p-4">
              {children}
            </div>
          </section>
          <Footer />
        </div>
     
      </body>

    </html>
  );
}
