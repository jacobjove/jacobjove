import { MDXProvider as _MDXProvider } from '@mdx-js/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import type { FC, ReactNode } from 'react';
import PageHeader from '@components/PageHeader';

interface UniversalProps {
  children: ReactNode;
}

// TODO: https://nextjs.org/docs/advanced-features/using-mdx#custom-elements
const components: Record<string, FC<UniversalProps>> = {
  PageHeader,
  h1: (props: UniversalProps) => <Typography variant="h1" {...props} />,
  h2: (props: UniversalProps) => <Typography variant="h2" {...props} />,
  p: (props: UniversalProps) => <Typography component="p" variant="body1" {...props} />,
  ul: (props: UniversalProps) => <List {...props} />,
  li: (props: UniversalProps) => <ListItem {...props} />,
  // img: ResponsiveImage,
  // pre: Pre,
  // code: InlineCode,
};

const MDXProvider = ({ children }: { children: ReactNode }) => (
  <_MDXProvider components={components}>{children}</_MDXProvider>
);

export default MDXProvider;
