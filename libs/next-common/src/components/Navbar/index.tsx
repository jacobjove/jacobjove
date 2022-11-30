import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { setCookie } from "cookies-next";
import { bindMenu, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { signOut, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useReducer, useState } from "react";
import styles from "./index.module.scss";
import MobileDrawer from "./MobileDrawer";
import { MenuItems } from "./types";

const DynamicPageTransitionProgressBar = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
});

type Locale = "en-US" | "jp" | "ko";

const LOCALES: Record<Locale, { flag: string; name: string }> = {
  "en-US": {
    flag: "🇺🇸",
    name: "English (US)",
  },
  jp: {
    flag: "🇯🇵",
    name: "日本語",
  },
  ko: {
    flag: "🇰🇷",
    name: "한국어",
  },
};

interface NavbarProps {
  siteTitle: string;
  logo?: ReactNode;
  menuItems: MenuItems;
  session: ReturnType<typeof useSession>["data"] | null;
}

export default function Navbar({ siteTitle, logo, menuItems, session }: NavbarProps) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const { t } = useTranslation("common", { keyPrefix: "Navbar" });
  const [mobileOpen, setMobileOpen] = useState(false);
  const accountMenuState = usePopupState({ variant: "popover", popupId: "account-menu" });
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState<null | HTMLElement>(null);

  const initialMenuState = Object.fromEntries(menuItems.map(([name]) => [name, false]));
  const menuStateReducer = (_state: Record<string, boolean>, payload: [string, boolean]) => {
    const [key, value] = payload;
    return { ...initialMenuState, [key]: value };
  };
  const [menuState, dispatch] = useReducer(menuStateReducer, initialMenuState);

  return (
    <>
      <AppBar className={styles.root} component={"nav"} position="static">
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
                {logo || (
                  <Typography
                    variant="h3"
                    sx={{
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
                    {siteTitle}
                  </Typography>
                )}
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
              {menuItems.map(([name, hrefOrSubitems]) => (
                <Fragment key={name}>
                  {typeof hrefOrSubitems === "string" ? (
                    <Link href={hrefOrSubitems} onClick={() => dispatch([name, !menuState[name]])}>
                      <Typography
                        color="inherit"
                        sx={{
                          fontWeight: menuState[name] || pathname === hrefOrSubitems ? "bold" : "normal",
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
                  ) : (
                    <div>
                      <Button
                        onClick={(event) => {
                          setDropdownAnchorEl(event.currentTarget);
                          dispatch([name, !menuState[name]]);
                        }}
                        endIcon={menuState[name] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        sx={{
                          fontWeight: hrefOrSubitems.map(([, href]) => href).includes(router.pathname)
                            ? "bold"
                            : "normal",
                        }}
                      >
                        {t(name)}
                      </Button>
                      <Menu
                        open={menuState[name]}
                        anchorEl={dropdownAnchorEl}
                        onClose={() => {
                          dispatch([name, false]);
                          setDropdownAnchorEl(null);
                        }}
                      >
                        {hrefOrSubitems.map(([subName, href]) => (
                          <MenuItem key={subName}>
                            <Link href={href}>
                              <Typography
                                color="inherit"
                                fontWeight={router.pathname === href ? "bold" : "normal"}
                              >
                                {t(subName)}
                              </Typography>
                            </Link>
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  )}
                </Fragment>
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
                      <MenuItem sx={{ textAlign: "center" }}>{"Admin"}</MenuItem>
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
      <MobileDrawer open={mobileOpen} setOpen={setMobileOpen} siteTitle={siteTitle} menuItems={menuItems} />
    </>
  );
}
