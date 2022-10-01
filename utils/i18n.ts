const DEFAULT_LOCALE = "en-US";

export async function getMessages(locale: string | undefined) {
  return import(`../messages/${locale ?? DEFAULT_LOCALE}.json`).then((module) => module.default);
}
