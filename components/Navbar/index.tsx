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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { setCookie } from "cookies-next";
import FormControl from "@mui/material/FormControl";
import styles from "./index.module.scss";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const DynamicPageTransitionProgressBar = dynamic(() => import("./PageTransitionProgressBar"));

const LANGUAGE_SELECTOR_WIDTH = "55px";

const LOCALES: Record<string, { flag: string; name: string }> = {
  "en-US": {
    flag: "🇺🇸",
    name: "English (US)",
  },
  jp: {
    flag: "🇯🇵",
    name: "日本語",
  },
};

export default function Navbar() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("common.Navbar");
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
                  width: LANGUAGE_SELECTOR_WIDTH,
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
                    {t(name)}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box
              className={styles["language-selector-container"]}
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <FormControl size="small" sx={{ width: LANGUAGE_SELECTOR_WIDTH }}>
                <Select
                  className={styles["language-selector"]}
                  value={locale ?? "en-US"}
                  renderValue={(value) => LOCALES[value].flag}
                  onChange={(event) => {
                    router.push({ pathname, query }, asPath, { locale: event.target.value });
                    setCookie("NEXT_LOCALE", event.target.value);
                  }}
                >
                  {Object.entries(LOCALES).map(([locale, { flag, name }]) => (
                    <MenuItem key={locale} value={locale}>
                      {flag} {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>
        <DynamicPageTransitionProgressBar />
      </AppBar>
      <MobileDrawer open={mobileOpen} setOpen={setMobileOpen} />
    </>
  );
}
