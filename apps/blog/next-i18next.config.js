import HttpBackend from "i18next-http-backend/cjs";
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

export const i18n = {
  // List all the locales to support.
  locales: ["en-US", "jp"],
  // Specify the default locale to use when a non-locale-prefixed path is visited.
  defaultLocale: "en-US",
  // This is a list of locale domains and the default locale they
  // should handle (these are only required when setting up domain routing)
  // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  domains: [
    {
      domain: "orega.org",
      defaultLocale: "en-US",
    },
    // {
    //   domain: 'example.fr',
    //   defaultLocale: 'fr',
    //   // an optional http field can also be used to test
    //   // locale domains locally with http instead of https
    //   http: true,
    // },
  ],
};

const BROWSER_MODE = typeof window !== "undefined";

const i18nConfig = {
  i18n,
  // debug: true,
  backend: {
    backendOptions: [
      { expirationTime: 60 * 60 * 1000 },
      {
        /* loadPath: 'https:// somewhere else' */
      },
    ], // 1 hour
    backends: BROWSER_MODE ? [LocalStorageBackend, HttpBackend] : [],
  },
  serializeConfig: false,
  use: BROWSER_MODE ? [ChainedBackend] : [],
};

export default i18nConfig;
