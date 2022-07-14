import AppDrawer from "@/components/AppDrawer";
import DeviceContext from "@/components/contexts/DeviceContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { FC, ReactNode, useContext, useState } from "react";

interface LayoutProps {
  children: ReactNode;
  scrollable?: boolean;
}

const Layout: FC<LayoutProps> = ({ scrollable, children }: LayoutProps) => {
  const router = useRouter();
  const { isDesktop } = useContext(DeviceContext);
  const headerHeightInPx = 60;
  const headerHeight = `${headerHeightInPx}px`;
  const footerHeightRem = 3;
  const footerHeight = `${footerHeightRem}rem`;
  const [appDrawerOpen, setAppDrawerOpen] = useState(isDesktop);
  return (
    <>
      <div
        style={{
          height: "100vh",
          maxHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Header heightInPx={headerHeightInPx} />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexGrow: 1,
            height: `calc(100vh - ${headerHeight})`,
            maxHeight: `calc(100vh - ${headerHeight})`,
          }}
        >
          {router.pathname.includes("/app/") && (
            <div style={{ position: "sticky", top: 0, maxHeight: "100vh" }}>
              {/* Note: AppDrawer uses absolute positioning. */}
              <AppDrawer open={appDrawerOpen} setOpen={setAppDrawerOpen} />
            </div>
          )}
          <div
            className="no-scrollbar"
            style={{
              position: "relative",
              flexGrow: 1,
              flexShrink: 1,
              height: "100%",
              maxHeight: "100%",
              overflowY: scrollable ? "scroll" : "hidden",
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <Footer height={footerHeight} />
    </>
  );
};

export default Layout;
