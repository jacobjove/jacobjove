import apolloClient from "@/lib/apollo/client/apollo";
import { ApolloProvider } from "@apollo/client";
import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";

const theme = createTheme({
  typography: {
    h1: {
      /* this will change the font size for h1, we can also do 
        it for others, */
      fontSize: "3rem",
    },
  },
  palette: {
    primary: {
      // main: colorName[hue],
      // we have to import the color first to use it
      main: blue[600],
    },
    secondary: {
      main: orange[400],
    },
  },
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  // const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
