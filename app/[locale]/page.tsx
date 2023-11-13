"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("header");

  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("home")}</h1>
    </main>
  );
}
