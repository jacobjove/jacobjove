import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { FunctionComponent } from "react";

const Layout: FunctionComponent = ({ children }) => {
  const footerHeightRem = 2;
  const footerHeight = `${footerHeightRem}rem`;
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Header />
      <div style={{ paddingTop: "2rem", paddingBottom: `${footerHeightRem + 2.5}rem` }}>
        {children}
      </div>
      <Footer height={footerHeight} />
    </div>
  );
};

export default Layout;
