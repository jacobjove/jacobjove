import Layout from "@components/Layout";
import { getMessages } from "@utils/i18n";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import NextErrorComponent from "next/error";
import { FC } from "react";

// Do not record an exception in Sentry for 404. (This is opinionated.)

const NotFound: FC = () => {
  const { t } = useTranslation("404");
  return (
    <Layout>
      <NextErrorComponent statusCode={404} title={t("message") ?? "Not found"} />
    </Layout>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale, ["404"]);
  return {
    props: { ...messages },
  };
};
