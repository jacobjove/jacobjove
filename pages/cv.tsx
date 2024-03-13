import PageHeader from "@components/PageHeader";
import Box from "@mui/material/Box";
import { getMessages } from "@utils/i18n";
import { existsSync, renameSync } from "fs";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { DownloaderHelper } from "node-downloader-helper";
import Layout from "../components/Layout";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jacobjove/";

const GOOGLE_DOC_URL =
  "https://docs.google.com/document/d/1hP2AVmetnqVviUFYHziqh4z4i-Kq-0CL1Pqyv-pfwrw/edit?usp=sharing";
const GOOGLE_DOC_PDF_DL_URL = GOOGLE_DOC_URL.replace("edit?usp=sharing", "export?format=pdf");
const RESUME_DIR = `${process.cwd()}/public`;
const RESUME_FILENAME_WITHOUT_EXTENSION = "resume";
const RESUME_FILE_EXTENSION = "pdf";
const RESUME_FILENAME = `${RESUME_FILENAME_WITHOUT_EXTENSION}.${RESUME_FILE_EXTENSION}`;
const RESUME_FILEPATH = `${RESUME_DIR}/${RESUME_FILENAME}`;
const RESUME_URL = "/resume.pdf#toolbar=0&navpanes=0&scrollbar=0";

export default function CV() {
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
        <embed
          src={RESUME_URL}
          style={{ width: "100%" }}
          height="1079" // pixels
          type="application/pdf"
        />
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
  const id = Date.now(); // e.g., 1664775602649
  const tempFilename = `${RESUME_FILENAME_WITHOUT_EXTENSION}-${id}.pdf`;
  const dl = new DownloaderHelper(GOOGLE_DOC_PDF_DL_URL, RESUME_DIR, {
    fileName: tempFilename,
  });
  dl.on("error", (err: unknown) => console.log("Download failed:", err));
  dl.on("end", () => {
    const tempFilepath = `${RESUME_DIR}/${tempFilename}`;
    if (existsSync(tempFilepath)) {
      renameSync(tempFilepath, RESUME_FILEPATH);
    } else {
      console.error(`File not found: ${tempFilepath}`);
    }
  });
  await dl.start().catch((err: unknown) => console.error(err));
  return {
    props: { ...(await messagesPromise) },
    // Regenerate the page at most once every two hours.
    revalidate: 60 * 60 * 2, // in seconds
  };
};
