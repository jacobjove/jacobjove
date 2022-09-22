import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppLayout from "@web/components/AppLayout";
import Layout from "@web/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const Fallback = () => {
  const router = useRouter();
  const Component = router.pathname.startsWith("/app") ? AppLayout : Layout;
  return (
    <Component>
      <Head>
        <title>{"You are offline"}</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "15%",
        }}
      >
        <h1>You are offline</h1>
        <Typography>Try reloading this page after establishing a network connection.</Typography>
      </Box>
    </Component>
  );
};

export default Fallback;
