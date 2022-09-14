import Head from "next/head";

const Fallback = () => (
  <>
    <Head>
      <title>Offline</title>
    </Head>
    <h1>You are offline</h1>
    <h2>Try reloading this page after establishing a network connection</h2>
  </>
);

export default Fallback;
