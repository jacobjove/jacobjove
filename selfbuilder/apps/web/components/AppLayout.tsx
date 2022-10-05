import DragLayer from "@web/components/DragLayer";
import Layout, { LayoutProps } from "@web/components/Layout";
import { FC } from "react";

type AppLayoutProps = Omit<LayoutProps, "inApp">;

const AppLayout: FC<AppLayoutProps> = (props: AppLayoutProps) => {
  const { children, ...rest } = props;
  return (
    <Layout {...rest} inApp={true}>
      {children}
      <DragLayer />
    </Layout>
  );
};

export default AppLayout;
