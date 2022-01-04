import AdjustIcon from "@mui/icons-material/Adjust";
import BentoIcon from "@mui/icons-material/Bento";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NotesIcon from "@mui/icons-material/Notes";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ScienceIcon from "@mui/icons-material/Science";
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
import { FC } from "react";

const drawerWidth = 240;

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
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log("open", open);
  return (
    <Drawer variant="permanent" open={open} PaperProps={{ style: { top: "auto" } }}>
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
      <Divider />
      <List>
        <Link href="/app/dashboard" passHref>
          <ListItem button component={"a"}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/app/calendar" passHref>
          <ListItem button component={"a"} title={"Calendar"}>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary={"Calendar"} />
          </ListItem>
        </Link>
        <Link href="/app/journal" passHref>
          <ListItem button component={"a"} title={"Notebook"}>
            <ListItemIcon>
              <NotesIcon />
            </ListItemIcon>
            <ListItemText primary={"Notebook"} />
          </ListItem>
        </Link>
        <Link href="/app/routines" passHref>
          <ListItem button component={"a"} title={"Routines"}>
            <ListItemIcon>
              <BentoIcon />
            </ListItemIcon>
            <ListItemText primary={"Routines"} />
          </ListItem>
        </Link>
        <Link href="/app/experiments" passHref>
          <ListItem button component={"a"} title={"Experiments"}>
            <ListItemIcon>
              <ScienceIcon />
            </ListItemIcon>
            <ListItemText primary={"Experiments"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/app/notifications" passHref>
          <ListItem button component={"a"} title={"Notifications"}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary={"Notifications"} />
          </ListItem>
        </Link>
        <Link href="/app/focus" passHref>
          <ListItem button component={"a"} title={"Focus"}>
            <ListItemIcon>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText primary={"Focus"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppDrawer;
