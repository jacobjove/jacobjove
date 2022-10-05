import { MDXProvider as _MDXProvider } from "@mdx-js/react";
import DateString from "@components/Date";
import PageHeader from "@components/PageHeader";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface UniversalProps {
  children?: ReactNode;
}

// TODO: https://nextjs.org/docs/advanced-features/using-mdx#custom-elements
const components = {
  DateString,
  PageHeader,
  h2: (props: UniversalProps) => <Typography variant="h2" {...props} />,
  // img: ResponsiveImage,
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: Text,
  // pre: Pre,
  // code: InlineCode,
};

const MDXProvider = ({ children }: { children: ReactNode }) => (
  <_MDXProvider components={components}>{children}</_MDXProvider>
);

export default MDXProvider;
