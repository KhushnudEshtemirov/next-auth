export { default } from "next-auth/middleware";

import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["uz", "en", "ru"],

//   defaultLocale: "uz",
// });

export const config = { matcher: ["/profile", "/admin"] };
