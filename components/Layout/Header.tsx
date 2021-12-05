import { handleLogout } from "@/auth";
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
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const pages = [["About", "/about"]];

const settings = [
  ["Profile", "/profile"],
  ["Settings", "/settings"],
];

const AppBar = styled(_AppBar)(() => ({
  color: "whitesmoke",
  "& a": {
    color: "whitesmoke",
    "&:hover": {
      textDecoration: "none",
      color: "white",
    },
  },
}));

const Header: FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const isActive = (pathname: string) => router.pathname === pathname;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout: React.MouseEventHandler = (e) => {
    e.preventDefault();
    session && handleLogout(session);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <a>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                HabitBuilder
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
                  <Link href={item[1]}>
                    <a>{item[0]}</a>
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box key={page[0]} sx={{ m: 2, color: "white", display: "block" }}>
                <Link href={page[1]}>
                  <a>{page[0]}</a>
                </Link>
              </Box>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {(session?.user && (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={session.user.name} src={session.user.image} />
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
                  <Divider />
                  <MenuItem onClick={logout}>
                    Sign out <LogoutIcon sx={{ marginLeft: "0.5rem" }} />
                  </MenuItem>
                </Menu>
              </>
            )) || (
              <Link href={`/auth/signin?callbackUrl=${router.pathname}`}>
                <a>Sign in</a>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
