import { getCollection } from 'astro:content';

/** Published essays, newest first. Drafts show only in `astro dev`. */
export async function getEssays() {
  const essays = await getCollection('essays', ({ data }) => import.meta.env.DEV || !data.draft);
  return essays.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
