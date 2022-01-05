import AppDrawer from "@/components/AppDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const headerHeightInPx = 60;
  const footerHeightRem = 2;
  const footerHeight = `${footerHeightRem}rem`;
  const [appDrawerOpen, setAppDrawerOpen] = useState(false);
  return (
    <div
      style={{ height: "100vh", position: "relative", display: "flex", flexDirection: "column" }}
    >
      <Header heightInPx={headerHeightInPx} />
      <div
        style={{
          display: "flex",
          position: "relative",
          paddingBottom: `${footerHeightRem + 2.5}rem`,
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {router.pathname.includes("/app/") && (
          <AppDrawer open={appDrawerOpen} setOpen={setAppDrawerOpen} />
        )}
        <div style={{ flexGrow: 1, flexShrink: 1, overflowY: "scroll" }}>{children}</div>
      </div>
      <Footer height={footerHeight} />
    </div>
  );
};

export default Layout;
