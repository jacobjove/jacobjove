import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useMemo } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }: AdminLayoutProps) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push(`/auth/signin?callbackUrl=${asPath}`);
    },
  });
  const breadcrumbs = useMemo(() => {
    const pathnames = pathname.split("/").filter((x) => x);
    // In the case of pathnames with query params, display the params in the breadcrumb
    // rather than displaying the parameter key(s). For example, display the object ID
    // as the last breadcrumb rather than the string `[id]`.
    if (Object.keys(query).length) {
      pathnames[pathnames.length - 1] = Object.values(query).join(" ");
    }
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
  }, [pathname, query]);
  if (!session) return null;
  return (
    <Layout>
      {breadcrumbs.length > 1 ? (
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
          {breadcrumbs.map(({ name, url }) => {
            return (
              <Link key={url} href={url} passHref>
                <Typography color="inherit">{name}</Typography>
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
