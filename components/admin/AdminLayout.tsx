import Breadcrumbs from "@mui/material/Breadcrumbs";
import Layout from "@components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import PageHeader from "@components/PageHeader";

interface AdminLayoutProps {
  children: ReactNode;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }: AdminLayoutProps) => {
  const router = useRouter();
  const { pathname } = router;
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push(`/auth/signin?callbackUrl=${pathname}`);
    },
  });
  const breadcrumbs = useMemo(() => {
    const pathnames = pathname.split("/").filter((x) => x);
    return pathnames.map((pathname, index) => {
      return {
        name: pathname.charAt(0).toUpperCase() + pathname.slice(1),
        url: `/${pathnames.reduce((prev, current, i) => {
          if (i <= index) {
            return `${prev}/${current}`;
          }
          return prev;
        })}`,
      };
    });
  }, [pathname]);
  if (!session) return null;
  return (
    <Layout>
      {breadcrumbs.length > 1 ? (
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
          {breadcrumbs.map(({ name, url }) => {
            return (
              <Link key={url} href={url} passHref>
                <Typography component={"a"} color="inherit">
                  {name}
                </Typography>
              </Link>
            );
          })}
        </Breadcrumbs>
      ) : (
        <PageHeader>{"Admin"}</PageHeader>
      )}
      {children}
    </Layout>
  );
};

export default AdminLayout;
