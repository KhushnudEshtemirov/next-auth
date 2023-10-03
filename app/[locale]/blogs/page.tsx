"use client";

import { useTranslations } from "next-intl";

const BlogsPage = () => {
  const t = useTranslations("blogs");

  return <h1>{t("blogsPage")}</h1>;
};

export default BlogsPage;
