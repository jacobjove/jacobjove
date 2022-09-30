import Container from "@mui/material/Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  fluid?: boolean;
}

export default function Layout({ children, fluid = false }: LayoutProps) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Container
        component={"main"}
        {...(fluid ? {} : { maxWidth: "md" })}
        sx={{
          flexGrow: 1,
          py: 2,
          position: "relative",
        }}
      >
        {children}
      </Container>
      <Footer height={"2rem"} />
    </div>
  );
}
