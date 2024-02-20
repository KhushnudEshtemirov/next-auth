"use client";

import { useTranslations } from "next-intl";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from "../google-captcha-wrapper";

export default function Home() {
  return (
    <GoogleCaptchaWrapper>
      <HomeInside />
    </GoogleCaptchaWrapper>
  );
}

function HomeInside() {
  const t = useTranslations("header");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = function (e: any) {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      console.log(
        "Execute recaptcha not available yet likely meaning key not recaptcha key not set"
      );
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      console.log(gReCaptchaToken);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("home")}</h1>
      <button onClick={handleSubmitForm}>Click</button>
    </main>
  );
}
