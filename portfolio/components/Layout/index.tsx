import Container from "@mui/material/Container";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  fluid?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Layout({ children, fluid = false, maxWidth }: LayoutProps) {
  return (
    <div style={{ height: "100%", maxHeight: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
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
