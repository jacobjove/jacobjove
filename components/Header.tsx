import { handleLogout } from "@/auth";
import ColorModeContext from "@/components/ColorModeContext";
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
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useContext, useState } from "react";

const DynamicPageTransitionProgressBar = dynamic(
  () => import("@/components/PageTransitionProgressBar")
);

const pages = [["About", "/about"]];

const settings = [
  ["Profile", "/profile"],
  ["Settings", "/settings"],
];

const AppBar = styled(_AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  // color: "whitesmoke",
  "& a": {
    // color: "whitesmoke",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      // color: "white",
    },
  },
  "& #appTabs": {
    // color: "darkgray",
    "& a": {
      // color: "darkgray",
      "&:hover": {
        textDecoration: "none",
        // color: "black",
      },
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

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const isActive = (pathname: string) => router.pathname === pathname;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout: React.MouseEventHandler = (e) => {
    e.preventDefault();
    session && handleLogout(session);
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
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((item) => (
                <MenuItem
                  key={item[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ textAlign: "center" }}
                  className={isActive(item[1]) ? "active" : ""}
                >
                  <Link href={item[1]} passHref>
                    <Typography component="a">{item[0]}</Typography>
                  </Link>
                </MenuItem>
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
              <Box key={page[0]} sx={{ m: 2, color: "white", display: "block" }}>
                <Link href={page[1]} passHref>
                  <Typography component="a">{page[0]}</Typography>
                </Link>
              </Box>
            ))}

            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {(session?.user && (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={`${session.user.name}`} src={`${session.user.image}`} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((page) => (
                    <MenuItem
                      key={page[0]}
                      onClick={handleCloseNavMenu}
                      sx={{ textAlign: "center" }}
                    >
                      <Link href={page[1]}>
                        <a>{page[0]}</a>
                      </Link>
                    </MenuItem>
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
