import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BentoIcon from "@mui/icons-material/Bento";
import BookIcon from "@mui/icons-material/Book";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NotesIcon from "@mui/icons-material/Notes";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScienceIcon from "@mui/icons-material/Science";
import SettingsIcon from "@mui/icons-material/Settings";
import TodayIcon from "@mui/icons-material/Today";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";

type MenuItem = [string, string, typeof DashboardIcon];

const MENU_ITEMS: MenuItem[][] = [
  [["Dashboard", "/app/dashboard", DashboardIcon]],
  [
    ["Calendar", "/app/calendar", TodayIcon],
    ["Tasks", "/app/tasks", FormatListBulletedIcon],
    ["Notes", "/app/notes", NotesIcon],
  ],
  [
    ["Psychology", "/app/psychology", PsychologyIcon],
    ["Nutrition", "/app/nutrition", BentoIcon],
    ["Fitness", "/app/fitness", FitnessCenterIcon],
    ["Finances", "/app/finances", AccountBalanceIcon],
  ],
  [
    ["Book list", "/app/booklist", BookIcon],
    ["Music", "/app/music", MusicNoteIcon],
    ["Experiments", "/app/experiments", ScienceIcon],
  ],
  [
    ["Settings", "/app/settings", SettingsIcon],
    ["Notifications", "/app/notifications", NotificationsIcon],
  ],
];

export const DRAWER_WIDTH = 240;

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
      <DrawerHeader>
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
            {menuItems.map(([label, href, Icon]) => (
              <Link key={label} href={href} passHref>
                <ListItem button component={"a"} title={label} selected={router.pathname === href}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Fragment>
      ))}
    </Drawer>
  );
};

export default AppDrawer;
