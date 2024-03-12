import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./MobileDrawer.module.css";
import { MenuItems } from "./types";

const DRAWER_WIDTH = 160;

interface MobileDrawerProps {
  siteTitle: string;
  menuItems: MenuItems;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileDrawer({ open, setOpen, siteTitle, menuItems }: MobileDrawerProps) {
  const handleClose = () => setOpen(false);
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER_WIDTH },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            {siteTitle}
          </Typography>
          <Divider />
          <List sx={{ "& .MuiListItemButton-root": { textAlign: "center" } }}>
            {menuItems.map(([name, hrefOrSubitems]) => (
              <Fragment key={name}>
                {typeof hrefOrSubitems === "string" ? (
                  <ListItem disablePadding className={styles.item}>
                    <Link href={hrefOrSubitems} passHref>
                      <ListItemButton onClick={handleClose} sx={{ width: "100% " }}>
                        <ListItemText primary={name} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ) : null}
              </Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
