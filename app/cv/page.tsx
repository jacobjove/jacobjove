import { existsSync, renameSync } from 'fs';
import type { Metadata } from 'next';
import { DownloaderHelper } from 'node-downloader-helper';
import CVPage from './cv';
import Layout from '@app/client/layout';

const RESUME_DIR = `${process.cwd()}/public`;
const RESUME_FILE_EXTENSION = 'pdf';

interface Resume {
  url: string;
  // name: string;
}

const RESUME =
  'https://docs.google.com/document/d/1hP2AVmetnqVviUFYHziqh4z4i-Kq-0CL1Pqyv-pfwrw/edit?usp=sharing';

export const metadata: Metadata = {
  title: 'CV',
};

type MaybeResume = Resume | null;

async function getResume(slug: string): Promise<MaybeResume> {
  const resume = RESUME;
  const id = `${Date.now() + slug}`; // Unique ID for each resume
  const tempFilename = `resume-${id}.${RESUME_FILE_EXTENSION}`;
  // const slug = kebabCase(resume.name);
  const dl = new DownloaderHelper(
    resume.replace('edit?usp=sharing', `export?format=${RESUME_FILE_EXTENSION}`),
    RESUME_DIR,
    { fileName: tempFilename }
  );

  return new Promise((resolve, reject) => {
    dl.on('error', (err) => {
      console.log(`Download failed for resume ${slug}:`, err);
      resolve(null);
      // reject();
    });
    dl.on('end', () => {
      const tempFilepath = `${RESUME_DIR}/${tempFilename}`;
      if (existsSync(tempFilepath)) {
        const resumeData = {
          url: `/resume-${slug}.pdf`,
        };
        renameSync(tempFilepath, `${RESUME_DIR}/${tempFilename.replace(id, slug)}`);
        resolve(resumeData);
      } else {
        console.error(`File not found: ${tempFilepath}`);
        resolve(null);
        // reject();
      }
    });
    dl.start().catch((err) => {
      console.error(`Failed to start downloading resume ${slug}:`, err);
      reject(err);
    });
  });
}

export default async function Page() {
  const maybeResume = await getResume('default');
  if (!maybeResume) return null;
  return (
    <Layout>
      <CVPage resume={maybeResume} />
    </Layout>
  );
}
