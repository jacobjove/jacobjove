import Layout from "../components/layout";
import Card from "@mui/material/Card";
import Image from "next/image";
import { GetStaticProps } from "next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormEvent, useState } from "react";

const NAME = "Jacob T. Fredericksen";
const EMAIL = "jacob.t.fredericksen@gmail.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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
    alert(`Is this your full name: ${result.data}`);
    setSubmitted(true);
  };
  return (
    <Layout fluid>
      <Box
        sx={{
          width: "100%",
          px: { sm: 4 },
          height: "100%",
          textAlign: "center",
          flexWrap: "wrap",
          display: "flex",
          flexDirection: { xs: "column" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "center",
          "& > div": {
            m: 2,
            p: 2,
            minWidth: { md: "32rem" },
            maxWidth: { md: "44rem" },
          },
        }}
      >
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
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
                <Button type="submit" variant={"outlined"} size={"large"} sx={{ my: 2 }}>
                  {"Submit"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
