import ColorModeContext from "@/components/contexts/ColorModeContext";
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
import { styled, useTheme } from "@mui/material/styles";
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

const pages = [["About", "/about"]];

const settings = [
  ["Profile", "/profile"],
  ["Settings", "/app/settings"],
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

  const accountMenuState = usePopupState({ variant: "popover", popupId: "account-menu" });
  const navMenuState = usePopupState({ variant: "popover", popupId: "nav-menu" });

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const isActive = (pathname: string) => router.pathname === pathname;

  const logout: React.MouseEventHandler = (e) => {
    e.preventDefault();
    session && signOut({ callbackUrl: "/" });
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        {/* Default toolbar height is 64px. */}
        <Toolbar disableGutters style={{ height: `${heightInPx}px`, minHeight: `${heightInPx}px` }}>
          <Link href={`${router.pathname.includes("/app/") ? "/app" : "/"}`}>
            <a style={{ display: "flex", alignItems: "center" }}>
              <Image alt="SelfBuilder logo" src="/logo.png" width={40} height={40} />
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
              {pages.map((item) => (
                <Link key={item[0]} href={item[1]} passHref>
                  <MenuItem
                    component="a"
                    sx={{ textAlign: "center" }}
                    className={isActive(item[1]) ? "active" : ""}
                  >
                    {item[0]}
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
            {pages.map((page) => (
              <Box key={page[0]} sx={{ m: 2, display: "block" }}>
                <Link href={page[1]} passHref>
                  <Typography component="a">{page[0]}</Typography>
                </Link>
              </Box>
            ))}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => colorMode.set(theme.palette.mode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {(session?.user && (
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
                  {settings.map((page) => (
                    <Link key={page[0]} href={page[1]} passHref>
                      <MenuItem component="a" sx={{ textAlign: "center" }}>
                        {page[0]}
                      </MenuItem>
                    </Link>
                  ))}
                  {session.user.isAdmin ||
                    (true && (
                      <MenuItem>
                        <Link href="/_admin">
                          <a>Administration</a>
                        </Link>
                      </MenuItem>
                    ))}
                  <Divider />
                  <MenuItem onClick={logout}>
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
