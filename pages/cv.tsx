import PageHeader from "@components/PageHeader";
import Box from "@mui/material/Box";
import { getMessages } from "@utils/i18n";
import { existsSync, renameSync } from "fs";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { DownloaderHelper } from "node-downloader-helper";
import Layout from "../components/Layout";
import kebabCase from "lodash/kebabCase";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jacobjove/";

const RESUME_DIR = `${process.cwd()}/public`;
const RESUME_FILE_EXTENSION = "pdf";

interface Resume {
  url: string;
  name: string;
}

const RESUMES = [
  {
    url: "https://docs.google.com/document/d/1hP2AVmetnqVviUFYHziqh4z4i-Kq-0CL1Pqyv-pfwrw/edit?usp=sharing",
    name: "Legal",
  },
  {
    url: "https://docs.google.com/document/d/1LpHANvDcycMiKWBHM9p4j8WzNkI7M18MWlaqPanaEwU/edit?usp=sharing",
    name: "Data Science",
  },
  // Add more resumes as needed
];

interface CVPageProps {
  resumes: Resume[];
}

export default function CV({ resumes }: CVPageProps) {
  const { t } = useTranslation("cv");
  return (
    <Layout>
      <PageHeader>{t("title")}</PageHeader>
      <Box
        sx={{
          width: "100%",
          maxWidth: "210mm", // A4
          minHeight: "297mm", // A4
          mx: "auto",
        }}
      >
        {resumes.map((resume, index) => (
          <div key={index} style={{ margin: "20px" }}>
            <p>{resume.name}</p>
            <embed
              src={resume.url}
              style={{ width: "100%" }}
              height="1079" // pixels
              type="application/pdf"
            />
          </div>
        ))}
      </Box>
      <Box textAlign={"center"} my={2}>
        <div
          className="badge-base LI-profile-badge text-center"
          data-locale="en_US"
          data-size="large"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="jacobjove"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/jacobjove?trk=profile-badge"
            target="_blank"
            rel="noreferrer"
            title={LINKEDIN_PROFILE_URL}
          />
        </div>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messagesPromise = getMessages(locale, ["cv"]);
  const resumes = await Promise.all(
    RESUMES.map(async (resume, index) => {
      const id = `${Date.now() + index}`; // Unique ID for each resume
      const tempFilename = `resume-${id}.${RESUME_FILE_EXTENSION}`;
      const slug = kebabCase(resume.name);
      const dl = new DownloaderHelper(
        resume.url.replace("edit?usp=sharing", `export?format=${RESUME_FILE_EXTENSION}`),
        RESUME_DIR,
        { fileName: tempFilename }
      );

      return new Promise((resolve, reject) => {
        dl.on("error", (err) => {
          console.log(`Download failed for resume ${index + 1}:`, err);
          resolve(null);
        });
        dl.on("end", () => {
          const tempFilepath = `${RESUME_DIR}/${tempFilename}`;
          if (existsSync(tempFilepath)) {
            const resumeData = {
              url: `/resume-${slug}.pdf#toolbar=0&navpanes=0&scrollbar=0`,
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

  return {
    props: { resumes, ...(await messagesPromise) },
    // Regenerate the page at most once every two hours.
    revalidate: 60 * 60 * 2, // in seconds
  };
};
