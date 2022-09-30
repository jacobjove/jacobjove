import styles from "./layout.module.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export const siteTitle = "Jacob's portfolio";

type MenuItem = [string, string];

const MENU_ITEMS: MenuItem[] = [
  ["Home", "/"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Layout({ children }: { children: React.ReactNode; home?: boolean }) {
  const router = useRouter();
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" width={"100%"} justifyContent={"space-evenly"}>
            <Typography variant="h3">{"俺が"}</Typography>
            <Box flexGrow={0.5} display={"flex"} justifyContent={"space-evenly"}>
              {MENU_ITEMS.map(([name, href]) => (
                <Link href={href} key={name} passHref>
                  <Typography
                    component="a"
                    color="inherit"
                    sx={{
                      fontWeight: router.pathname === href ? "bold" : "normal",
                      textTransform: "capitalize",
                      fontFamily: "Open Sans",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box>{"EN"}</Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component={"main"} maxWidth={"md"} sx={{ flexGrow: 1, py: 2 }}>
        {children}
      </Container>
      <Footer height={"2rem"} />
    </div>
  );
}
