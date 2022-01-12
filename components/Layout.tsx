import AppDrawer from "@/components/AppDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { FC, ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
  scrollable?: boolean;
}

const Layout: FC<LayoutProps> = ({ scrollable, children }: LayoutProps) => {
  const router = useRouter();
  const headerHeightInPx = 60;
  const headerHeight = `${headerHeightInPx}px`;
  const footerHeightRem = 3;
  const footerHeight = `${footerHeightRem}rem`;
  const [appDrawerOpen, setAppDrawerOpen] = useState(false);
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
            style={{
              flexGrow: 1,
              flexShrink: 1,
              padding: "0.25rem",
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
