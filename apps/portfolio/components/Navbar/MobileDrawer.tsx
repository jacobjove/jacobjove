import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { MENU_ITEMS, SITE_TITLE } from "./constants";

const DRAWER_WIDTH = 160;

interface MobileDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileDrawer({ open, setOpen }: MobileDrawerProps) {
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
            {SITE_TITLE}
          </Typography>
          <Divider />
          <List sx={{ "& .MuiListItemButton-root": { textAlign: "center" } }}>
            {MENU_ITEMS.map(([name, href]) => (
              <ListItem key={name} disablePadding>
                <Link href={href} passHref>
                  <ListItemButton onClick={handleClose}>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
