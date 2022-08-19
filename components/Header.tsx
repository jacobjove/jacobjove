import ColorModeContext from "@/components/contexts/ColorModeContext";
import { useUser } from "@/components/contexts/UserContext";
import logoImg from "@/public/logo.png";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import _AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { bindMenu, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useContext } from "react";

const DynamicPageTransitionProgressBar = dynamic(
  () => import("@/components/PageTransitionProgressBar")
);

// label, href, enabled
type Page = [string, string, boolean];

const pages: Page[] = [["About", "/about", false]];

const settings: Page[] = [
  ["Profile", "/profile", false],
  ["Settings", "/app/settings", true],
];

const AppBar = styled(_AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  "& a": {
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

interface HeaderProps {
  heightInPx?: number;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const heightInPx = props.heightInPx ?? 60;
  const router = useRouter();
  const { data: session } = useSession();
  const { user } = useUser();
  const accountMenuState = usePopupState({ variant: "popover", popupId: "account-menu" });
  const navMenuState = usePopupState({ variant: "popover", popupId: "nav-menu" });
  const [colorMode, setColorMode] = useContext(ColorModeContext);
  const isActive = (pathname: string) => router.pathname === pathname;
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        {/* Default toolbar height is 64px. */}
        <Toolbar disableGutters style={{ height: `${heightInPx}px`, minHeight: `${heightInPx}px` }}>
          <Link href={`${router.pathname.includes("/app/") ? "/app" : "/"}`}>
            <a style={{ display: "flex", alignItems: "center" }}>
              <Image alt="SelfBuilder logo" src={logoImg} width={40} height={40} />
              <Typography
                noWrap
                component="span"
                sx={{
                  ml: 0.5,
                  mr: 2,
                  display: { xs: "none", md: "inline" },
                }}
              >
                SelfBuilder
                {process.env.NODE_ENV !== "production" && (
                  <sup>
                    <small>{"dev"}</small>
                  </sup>
                )}
              </Typography>
            </a>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton {...bindTrigger(navMenuState)} size="large" color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              {...bindMenu(navMenuState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(([label, href, enabled]) => (
                <Link key={label} href={href} passHref>
                  <MenuItem
                    disabled={!enabled}
                    component="a"
                    sx={{ textAlign: "center" }}
                    className={isActive(href) ? "active" : ""}
                  >
                    {label}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            SelfBuilder
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(([label, href, enabled]) => (
              <Box key={label} sx={{ m: 2, display: "block" }}>
                <Link href={href} passHref>
                  <a
                    onClick={(event) => {
                      if (!enabled) event.preventDefault();
                    }}
                  >
                    <Typography
                      sx={{
                        cursor: !enabled ? "not-allowed" : "pointer",
                      }}
                    >
                      {label}
                    </Typography>
                  </a>
                </Link>
              </Box>
            ))}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {colorMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {(session && (
              <>
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
                  {settings.map(([label, href, enabled]) => (
                    <Link key={label} href={href} passHref>
                      <MenuItem disabled={!enabled} component="a" sx={{ textAlign: "center" }}>
                        {label}
                      </MenuItem>
                    </Link>
                  ))}

                  {!!user?.isAdmin && (
                    <MenuItem>
                      <Link href="/_admin">
                        <a>Administration</a>
                      </Link>
                    </MenuItem>
                  )}
                  <Divider />
                  <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                    Sign out <LogoutIcon sx={{ marginLeft: "0.5rem" }} />
                  </MenuItem>
                </Menu>
              </>
            )) || (
              <Link href={`/auth/signin?callbackUrl=${router.pathname}`} passHref>
                <Typography component="a">Sign in</Typography>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
      <DynamicPageTransitionProgressBar />
    </AppBar>
  );
};

export default Header;
