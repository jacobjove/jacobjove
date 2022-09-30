import Link from "next/link";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { SITE_TITLE, MENU_ITEMS } from "./constants";

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <AppBar component={"nav"} position="static">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              px: { xs: 1, sm: 2 },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" passHref>
              <Typography
                variant="h3"
                component="a"
                sx={{
                  color: "inherit",
                  "&:hover": {
                    textDecoration: "none",
                  },
                  display: {
                    // xs: "none",
                    sm: "inherit",
                  },
                }}
              >
                {SITE_TITLE}
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 0.5,
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-evenly",
                columnGap: 2,
              }}
            >
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
      <MobileDrawer open={mobileOpen} setOpen={setMobileOpen} />
    </>
  );
}
