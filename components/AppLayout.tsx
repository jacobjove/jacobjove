import Layout, { LayoutProps } from "@/components/Layout";
import { FC } from "react";

type AppLayoutProps = Omit<LayoutProps, "inApp">;

const AppLayout: FC<AppLayoutProps> = (props: AppLayoutProps) => {
  return <Layout {...props} inApp={true} />;
};

export default AppLayout;
