import Layout from "../components/Layout";
import Card from "@mui/material/Card";
import Image from "next/image";
import { GetStaticProps } from "next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormEvent, useState } from "react";
import PageHeader from "@components/PageHeader";
import { useTranslations } from "next-intl";
import { getMessages } from "@utils/i18n";

const NAME = "Jacob T. Fredericksen";
const EMAIL = "jacob.t.fredericksen@gmail.com";

const ENABLE_CONTACT_FORM = process.env.NODE_ENV === "development";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("Contact");

  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      last: form.last.value as string,
    };

    // Send the form data to our API and get a response.
    const response = await fetch("/api/contact", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
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
    setSubmitted(true);
  };
  return (
    <Layout fluid>
      <PageHeader>{t("title")}</PageHeader>
      <Box display="flex" justifyContent="center">
        <Typography maxWidth={"sm"} mb={2}>
          {t("lead")}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          px: { sm: 4 },
          textAlign: "center",
          flexWrap: "wrap",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "center", lg: "start" },
          justifyContent: "center",
          "& > div": {
            m: 2,
            p: 2,
            minWidth: { md: "30rem" },
            maxWidth: { md: "40rem" },
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
              {NAME}
            </Typography>
            <Typography my={1}>{"100 DuPont St., Brooklyn, NY 11222"}</Typography>
            <Typography my={1}>
              <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
                {EMAIL}
              </a>
            </Typography>
          </CardContent>
        </Card>
        {ENABLE_CONTACT_FORM && (
          <Card>
            <CardContent>
              {submitted ? (
                <Typography>
                  {
                    "Your message was sent successfully. I will get back to you at my convenience. Thanks!"
                  }
                </Typography>
              ) : (
                <form onSubmit={handleSubmit} style={{ width: "100%", position: "relative" }}>
                  <TextField label={"Name"} name={"name"} fullWidth required margin={"normal"} />
                  <TextField
                    label={"Email address"}
                    name={"email"}
                    fullWidth
                    required
                    margin={"normal"}
                  />
                  <TextField
                    label={"Message"}
                    name={"message"}
                    fullWidth
                    multiline
                    required
                    margin={"normal"}
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant={"outlined"}
                    size={"large"}
                    sx={{ my: 2 }}
                    disabled={!ENABLE_CONTACT_FORM}
                  >
                    {"Submit"}
                  </Button>
                </form>
              )}
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
