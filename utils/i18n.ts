import pick from "lodash/pick";

const DEFAULT_LOCALE = "en-US";

// https://next-intl-docs.vercel.app/docs/usage/messages

export async function getMessages(locale: string | undefined, namespaces?: string[]) {
  return import(`../messages/${locale ?? DEFAULT_LOCALE}.json`).then((module) =>
    namespaces ? pick(module.default, namespaces) : module.default
  );
}
