import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getEssays } from '../lib/essays';

export async function GET(context: APIContext) {
  const essays = await getEssays();
  return rss({
    title: 'Jacob Jove',
    description: 'Essays by Jacob Jove.',
    site: context.site!,
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.description,
      pubDate: essay.data.date,
      link: `/writing/${essay.id}/`,
    })),
  });
}
