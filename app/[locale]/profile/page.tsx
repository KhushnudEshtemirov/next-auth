"use client";

import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("profile");
  const { data: session } = useSession();

  return (
    <>
      <h1>{t("profilePage")}</h1>
      <h2>
        {t("signedInAs")} {session?.user?.name}
      </h2>
    </>
  );
};

export default Profile;
