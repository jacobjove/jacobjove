import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";

const DEFAULT_LOCALE = "en-US";

// https://github.com/i18next/next-i18next#serversidetranslations

export async function getMessages(locale: string | undefined, namespaces?: string[]) {
  return serverSideTranslations(
    locale ?? DEFAULT_LOCALE,
    ["common", ...(namespaces ?? [])],
    nextI18NextConfig
  );
}
