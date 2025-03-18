import { existsSync, renameSync } from 'fs';
import type { Metadata } from 'next';
import { DownloaderHelper } from 'node-downloader-helper';
import type { Essay } from './essay';
import EssayPage from './essay';
import Layout from '@app/client/layout';

const ESSAY_DIR = `${process.cwd()}/public/essays`;
const ESSAY_FILE_EXTENSION = 'pdf';

export const ESSAYS: Record<string, Essay> = {
  // 'secular-america': {
  //   url: 'https://docs.google.com/document/d/1rHve2C3Lg7Rj-m21K395UMKU58qATIeM7HrSQakmy7I/edit',
  //   title: 'On American Religiosity and the Separation of Church and State',
  //   description: 'Is America a Christian nation or a secular nation?',
  // },
  'history-of-science-and-religion': {
    url: 'https://docs.google.com/document/d/12_DAF9wBjXn_T3GJE6NJJDm62--9HSPnMzplX1Yg7gI/edit',
    title: 'On the History of Science and Religion',
    description: 'How did we get here?',
  },
};

export const metadata: Metadata = {
  title: 'Essay',
};

type MaybeEssay = Essay | null;

async function getEssay(slug: string): Promise<MaybeEssay> {
  const essay = ESSAYS[slug];
  if (!essay) return null;
  const id = `${Date.now() + slug}`; // Unique ID for each essay
  const tempFilename = `${id}.${ESSAY_FILE_EXTENSION}`;
  // const slug = kebabCase(essay.name);
  const dl = new DownloaderHelper(
    essay.url.replace(/edit(\?usp=sharing)?/, `export?format=${ESSAY_FILE_EXTENSION}`),
    ESSAY_DIR,
    { fileName: tempFilename }
  );

  return new Promise((resolve, reject) => {
    dl.on('error', (err) => {
      console.log(`Download failed for essay ${slug}:`, err);
      resolve(null);
      // reject();
    });
    dl.on('end', () => {
      const tempFilepath = `${ESSAY_DIR}/${tempFilename}`;
      if (existsSync(tempFilepath)) {
        const essayData = {
          ...essay,
          url: `/essays/${slug}.pdf`,
        };
        renameSync(tempFilepath, `${ESSAY_DIR}/${tempFilename.replace(id, slug)}`);
        resolve(essayData);
      } else {
        console.error(`File not found: ${tempFilepath}`);
        resolve(null);
        // reject();
      }
    });
    dl.start().catch((err) => {
      console.error(`Failed to start downloading essay ${slug}:`, err);
      reject(err);
    });
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const maybeEssay = await getEssay(params.slug);
  console.log(maybeEssay);
  if (!maybeEssay) return null;
  return (
    <Layout maxWidth="sm">
      <EssayPage essay={maybeEssay} />
    </Layout>
  );
}
