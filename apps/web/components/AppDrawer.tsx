// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import BentoIcon from "@mui/icons-material/Bento";
// import BookIcon from "@mui/icons-material/Book";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
// import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NotesIcon from "@mui/icons-material/Notes";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import ScienceIcon from "@mui/icons-material/Science";
import SettingsIcon from "@mui/icons-material/Settings";
import TodayIcon from "@mui/icons-material/Today";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment, ReactNode } from "react";

type MenuItem = [string, string, typeof DashboardIcon, boolean];

const MENU_ITEMS: MenuItem[][] = [
  [["Home", "/app/home", HomeIcon, true]],
  [
    ["Planner", "/app/planner", TodayIcon, true],
    ["Notes", "/app/notes", NotesIcon, true],
  ],
  // [
  //   ["Dashboard", "/app/dashboard", DashboardIcon, false],
  //   ["Psychology", "/app/psychology", PsychologyIcon, false],
  //   ["Nutrition", "/app/nutrition", BentoIcon, false],
  //   ["Fitness", "/app/fitness", FitnessCenterIcon, false],
  //   ["Finances", "/app/finances", AccountBalanceIcon, false],
  //   ["Book list", "/app/booklist", BookIcon, false],
  //   ["Music", "/app/music", MusicNoteIcon, false],
  //   ["Experiments", "/app/experiments", ScienceIcon, false],
  // ],
  [
    ["Settings", "/app/settings", SettingsIcon, true],
    ["Notifications", "/app/notifications", NotificationsIcon, false],
  ],
];

export const DRAWER_WIDTH = 200;

const drawerWidth = DRAWER_WIDTH;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader: FC<{ open: boolean; children: ReactNode }> = ({ open, children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: open ? "end" : "center",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }}
    >
      {children}
    </Box>
  );
};

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

interface AppDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AppDrawer: FC<AppDrawerProps> = (props: AppDrawerProps) => {
  const { open, setOpen } = props;
  const router = useRouter();
  const theme = useTheme();
  const { isMobile } = useDeviceData();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        // Get rid of scrollbar.
        className: "no-scrollbar",
        sx: {
          position: "absolute",
          top: 0,
        },
      }}
    >
      <DrawerHeader open={open}>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {theme.direction === "rtl" ? (
            open ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )
          ) : open ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      {MENU_ITEMS.map((menuItems, index) => (
        <Fragment key={index}>
          <Divider />
          <List>
            {menuItems.map(([label, href, Icon, enabled]) => (
              <Link key={label} href={href} passHref>
                <ListItemButton
                  disabled={!enabled}
                  component={"a"}
                  title={label}
                  selected={router.pathname === href}
                  sx={{
                    width: "100%",
                    // TODO: This is a hack; fix it.
                    pl: isMobile ? "12px" : "16px",
                  }}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Fragment>
      ))}
      <div id="drawer-bottom"></div>
    </Drawer>
  );
};

export default AppDrawer;
