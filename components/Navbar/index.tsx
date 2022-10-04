import Link from "next/link";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { SITE_TITLE, MENU_ITEMS } from "./constants";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { setCookie } from "cookies-next";
import FormControl from "@mui/material/FormControl";
import styles from "./index.module.scss";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut, useSession } from "next-auth/react";
import { bindMenu, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

const DynamicPageTransitionProgressBar = dynamic(() => import("./PageTransitionProgressBar"));

type Locale = "en-US" | "jp";

const LOCALES: Record<Locale, { flag: string; name: string }> = {
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
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("common.Navbar");
  const accountMenuState = usePopupState({ variant: "popover", popupId: "account-menu" });
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
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{
                mr: 2,
                display: { sm: "none" },
                flexBasis: "20%",
                flexShrink: 1,
                justifyContent: "flex-start",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box flexBasis={"20%"} flexShrink={1}>
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
                      xs: "block",
                      sm: "flex",
                    },
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "center",
                  }}
                >
                  {SITE_TITLE}
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                flexShrink: 0,
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
                      px: "0.25rem",
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
                display: "flex",
                justifyContent: "flex-end",
                flexBasis: "20%",
                flexShrink: 1,
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <FormControl size="small" sx={{ width: "55px" }}>
                <Select
                  className={styles["language-selector"]}
                  value={locale ?? "en-US"}
                  renderValue={(value) => LOCALES[value as Locale].flag}
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
              {session?.user && (
                <Box>
                  <IconButton {...bindTrigger(accountMenuState)} sx={{ p: 0 }}>
                    <Avatar alt={`${session.user.name}`} src={`${session.user.image}`} />
                  </IconButton>
                  <Menu
                    sx={{
                      mt: "45px",
                      "& a": { color: "text.primary" },
                    }}
                    {...bindMenu(accountMenuState)}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Link href={"/admin"} passHref>
                      <MenuItem component="a" sx={{ textAlign: "center" }}>
                        {"Admin"}
                      </MenuItem>
                    </Link>

                    <Divider />
                    <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                      Sign out <LogoutIcon sx={{ marginLeft: "0.5rem" }} />
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
        <DynamicPageTransitionProgressBar />
      </AppBar>
      <MobileDrawer open={mobileOpen} setOpen={setMobileOpen} />
    </>
  );
}
