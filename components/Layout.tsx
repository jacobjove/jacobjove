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
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Header heightInPx={headerHeightInPx} />
      <div
        style={{
          display: "flex",
          position: "relative",
          paddingBottom: `${footerHeightRem + 2.5}rem`,
        }}
      >
        {router.pathname.includes("/app/") && (
          <AppDrawer open={appDrawerOpen} setOpen={setAppDrawerOpen} />
        )}
        <div style={{ flexGrow: 1, flexShrink: 1 }}>{children}</div>
      </div>
      <Footer height={footerHeight} />
    </div>
  );
};

export default Layout;
