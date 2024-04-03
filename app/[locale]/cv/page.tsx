import { existsSync, renameSync } from 'fs';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { DownloaderHelper } from 'node-downloader-helper';
import kebabCase from 'lodash/kebabCase';
import CVPage from './cv';
import { getStaticParams } from '@i18n';
import Layout from '@app/client/layout';

const RESUME_DIR = `${process.cwd()}/public`;
const RESUME_FILE_EXTENSION = 'pdf';

interface Resume {
  url: string;
  name: string;
}

const RESUMES = [
  {
    url: 'https://docs.google.com/document/d/1hP2AVmetnqVviUFYHziqh4z4i-Kq-0CL1Pqyv-pfwrw/edit?usp=sharing',
    name: 'Legal',
  },
  {
    url: 'https://docs.google.com/document/d/1LpHANvDcycMiKWBHM9p4j8WzNkI7M18MWlaqPanaEwU/edit?usp=sharing',
    name: 'Data Science',
  },
  // Add more resumes as needed
];

export const metadata: Metadata = {
  title: 'CV',
};

async function getResumes(): Promise<Resume[]> {
  return await Promise.all(
    RESUMES.map(async (resume, index) => {
      const id = `${Date.now() + index}`; // Unique ID for each resume
      const tempFilename = `resume-${id}.${RESUME_FILE_EXTENSION}`;
      const slug = kebabCase(resume.name);
      const dl = new DownloaderHelper(
        resume.url.replace('edit?usp=sharing', `export?format=${RESUME_FILE_EXTENSION}`),
        RESUME_DIR,
        { fileName: tempFilename }
      );

      return new Promise((resolve, reject) => {
        dl.on('error', (err) => {
          console.log(`Download failed for resume ${index + 1}:`, err);
          resolve(null);
        });
        dl.on('end', () => {
          const tempFilepath = `${RESUME_DIR}/${tempFilename}`;
          if (existsSync(tempFilepath)) {
            const resumeData = {
              url: `/resume-${slug}.pdf`,
              name: resume.name,
            };
            renameSync(tempFilepath, `${RESUME_DIR}/${tempFilename.replace(id, slug)}`);
            resolve(resumeData);
          } else {
            console.error(`File not found: ${tempFilepath}`);
            resolve(null);
          }
        });
        dl.start().catch((err) => {
          console.error(`Failed to start downloading resume ${index + 1}:`, err);
          reject(err);
        });
      });
    })
  );
}

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const resumes = await getResumes();
  return (
    <Layout>
      <CVPage resumes={resumes} />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
