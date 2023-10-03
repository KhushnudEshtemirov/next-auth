"use client";

import { useTranslations } from "next-intl";

const Admin = () => {
  const t = useTranslations("admin");

  return <h1>{t("adminPage")}</h1>;
};

export default Admin;
