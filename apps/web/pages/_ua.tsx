import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import Layout from "@web/components/Layout";
import { NextSeo } from "next-seo";

const DebugUA = () => {
  const deviceData = useDeviceData();
  return (
    <Layout>
      <NextSeo noindex />
      <Box
        sx={{
          py: 4,
          maxHeight: "100%",
          overflowY: "scroll",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {Object.entries(deviceData).map(([key, value]) => (
          <Typography key={key} fontSize={"0.9rem"}>
            {key}: <span style={{ textDecoration: "underline" }}>{String(value)}</span>
          </Typography>
        ))}
      </Box>
    </Layout>
  );
};

export default DebugUA;
