import Footer from "@components/Footer";
import Container from "@mui/material/Container";
// import _Navbar from "@components/Navbar";
import Navbar from "@orega/next-common/components/Navbar";
import { useSession } from "next-auth/react";
import { MENU_ITEMS, SITE_TITLE } from "./constants";

interface LayoutProps {
  children: React.ReactNode;
  fluid?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Layout({ children, fluid = false, maxWidth }: LayoutProps) {
  const { data: session } = useSession();
  return (
    <div style={{ height: "100%", maxHeight: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar siteTitle={SITE_TITLE} menuItems={MENU_ITEMS} session={session} />
      <Container
        component={"main"}
        {...(fluid ? { maxWidth: false } : maxWidth ? { maxWidth } : { maxWidth: "md" })}
        sx={{
          flexGrow: 1,
          py: 2,
          position: "relative",
        }}
      >
        {children}
      </Container>
      <Footer height={"2.5rem"} />
    </div>
  );
}
