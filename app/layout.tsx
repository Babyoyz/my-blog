import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className="bg-blue-50">
        <Navbar urls={Url} />
        {children}
      </body>
    </html>
  );
}
