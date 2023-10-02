import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import AuthProvider from "../context/AuthProvider";

import "./style.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return [{ locale: "uz" }, { locale: "en" }, { locale: "ru" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className={inter.className}>
        <AuthProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
