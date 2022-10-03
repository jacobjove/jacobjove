import Layout from "../components/Layout";
import Card from "@mui/material/Card";
import Image from "next/image";
import { GetStaticProps } from "next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";
import PageHeader from "@components/PageHeader";
import { useTranslations } from "next-intl";
import { getMessages } from "@utils/i18n";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useReducer } from "react";

const NAME = "Jacob T. Fredericksen";
const EMAIL = "jacob.t.fredericksen@gmail.com";

const CONTACT_FORM_ENABLED = true;

type Status = "idle" | "sending" | "sent" | "error";

interface ContactFormData {
  name?: string;
  email?: string;
  message?: string;
}

type ContactFormAction = { type: "reset" } | { type: "update"; payload: Partial<ContactFormData> };

const contactFormDataReducer = (state: Partial<ContactFormData>, action: ContactFormAction) => {
  switch (action.type) {
    case "reset":
      return {};
    case "update":
      return { ...state, ...action.payload };
  }
};

export default function Contact() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");
  const [contactFormData, dispatchContactFormData] = useReducer(contactFormDataReducer, {});

  const handleChange = (field: keyof ContactFormData, value: string) =>
    dispatchContactFormData({ type: "update", payload: { [field]: value } });

  const handleSubmit = async (event: SyntheticEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setStatus("sending");

    // Send the form data to our API and get a response.
    const response = await fetch("/api/contact", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(contactFormData),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (result.ok) {
      setStatus("sent");
    } else if (result.error) {
      console.error(result.error);
      setStatus("error");
    }
  };
  return (
    <Layout fluid>
      <PageHeader>{t("title")}</PageHeader>
      <Box display="flex" justifyContent="center">
        <Typography sx={{ maxWidth: "sm", mb: 2, px: 2, display: "none" }}>{t("lead")}</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          my: { sm: 2 },
          px: { sm: 4 },
          flexWrap: "wrap",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "stretch", sm: "center", lg: "start" },
          justifyContent: "center",
          "& > div": {
            mb: 2,
            mx: { sm: 2 },
            pt: 1,
            minWidth: { sm: "30rem" },
            maxWidth: "40rem",
          },
        }}
      >
        <Card>
          <CardContent sx={{ textAlign: "center", px: 4 }}>
            <Image
              priority
              src="/images/profile.jpg"
              style={{ borderRadius: "50%" }}
              height={108}
              width={108}
              alt={NAME}
            />
            <Typography variant={"h2"} sx={{ my: 2 }}>
              {t("name")}
            </Typography>
            <Box my={1}>
              <Typography>{"100 DuPont St."}</Typography>
              <Typography>{"Brooklyn, NY 11222"}</Typography>
            </Box>
            <Typography my={1}>
              <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
                {EMAIL}
              </a>
            </Typography>
          </CardContent>
        </Card>
        {CONTACT_FORM_ENABLED && (
          <Card>
            <CardContent sx={{ position: "relative" }}>
              <Box
                sx={{
                  ...(["sent", "error"].includes(status) && {
                    position: { sm: "absolute" },
                    top: { sm: 0 },
                    left: { sm: 0 },
                    width: "100%",
                    height: "100%",
                  }),
                  display: ["sent", "error"].includes(status) ? "flex" : "none",
                  alignItems: { xs: "start", sm: "center" },
                  justifyContent: "center",
                  p: { xs: 3, sm: 10 },
                }}
              >
                {status === "error" ? (
                  <Typography color="error" sx={{ mb: 2 }}>
                    {t("error")}
                  </Typography>
                ) : status === "sent" ? (
                  <Box>
                    <Typography>{t("success")}</Typography>
                    <Box mt={3} display={"flex"} justifyContent={"center"}>
                      <Button
                        variant={"outlined"}
                        onClick={() => {
                          dispatchContactFormData({ type: "reset" });
                          setStatus("idle");
                        }}
                      >
                        <RefreshIcon sx={{ mr: 1 }} /> {"Refresh form"}
                      </Button>
                    </Box>
                  </Box>
                ) : null}
              </Box>
              <Box
                sx={{
                  my: -2,
                  visibility: ["idle", "sending"].includes(status) ? "visible" : "hidden",
                  display: {
                    xs: ["sent", "error"].includes(status) ? "none" : "block",
                    sm: "block",
                  },
                }}
              >
                <form onSubmit={handleSubmit} style={{ width: "100%", position: "relative" }}>
                  <TextField
                    label={t("nameFieldLabel")}
                    name={"name"}
                    value={contactFormData.name ?? ""}
                    onChange={(event) => handleChange("name", event.target.value)}
                    fullWidth
                    required
                    margin={"dense"}
                  />
                  <TextField
                    label={t("emailFieldLabel")}
                    name={"email"}
                    value={contactFormData.email ?? ""}
                    onChange={(event) => handleChange("email", event.target.value)}
                    fullWidth
                    required
                    margin={"dense"}
                  />
                  <TextField
                    label={t("messageFieldLabel")}
                    name={"message"}
                    value={contactFormData.message ?? ""}
                    onChange={(event) => handleChange("message", event.target.value)}
                    fullWidth
                    multiline
                    required
                    margin={"normal"}
                    rows={4}
                  />
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant={"outlined"}
                      size={"large"}
                      sx={{ my: 2, mx: "auto" }}
                      disabled={!CONTACT_FORM_ENABLED}
                    >
                      {status === "sending" ? "Submitting..." : "Submit"}
                    </Button>
                  </Box>
                </form>
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale);
  return {
    props: { messages },
  };
};
