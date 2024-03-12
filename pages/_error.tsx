/**
 * This page is loaded by Nextjs:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Nextjs error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */

import Layout from "@components/Layout";
import * as Sentry from "@sentry/nextjs";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import NextErrorComponent, { ErrorProps } from "next/error";

const CustomErrorComponent: NextPage<ErrorProps> = (props) => {
  const { i18n } = useTranslation();
  i18n.reloadResources();
  return (
    <Layout>
      <NextErrorComponent statusCode={props.statusCode} />
    </Layout>
  );
};

CustomErrorComponent.getInitialProps = async (contextData) => {
  await Sentry.captureUnderscoreErrorException(contextData);
  return {
    // Note: This includes the status code.
    ...NextErrorComponent.getInitialProps(contextData),
  };
};

export default CustomErrorComponent;
