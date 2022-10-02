const DEFAULT_LOCALE = "en-US";

// https://next-intl-docs.vercel.app/docs/usage/messages

export async function getMessages(locale: string | undefined) {
  return import(`../messages/${locale ?? DEFAULT_LOCALE}.json`).then((module) => module.default);
}
