"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

const Navbar = () => {
  const t = useTranslations("header");
  const pathname = usePathname();

  const languages = [
    { name: "Uz", code: "uz" },
    { name: "En", code: "en" },
    { name: "Ru", code: "ru" },
  ];

  return (
    <div className="bg-gray-300 pl-10 py-5">
      <ul className="flex gap-10">
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <Link href="/blogs">{t("blogs")}</Link>
        </li>
        <li>
          <Link href="/profile">{t("profile")}</Link>
        </li>
        <li>
          <Link href="/admin">{t("admin")}</Link>
        </li>
        <li>
          <Link href="/auth/signin">{t("signIn")}</Link>
        </li>
        <li
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm(t("areYouSure"))) signOut();
          }}
        >
          {t("signOut")}
        </li>
        {languages.map((language) => (
          <li key={language.code}>
            <Link href={pathname} locale={language.code}>
              {language.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
