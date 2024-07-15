'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import { SITE_TITLE } from './constants';
import ContextProvider from './context';
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';

interface LayoutProps {
  children: ReactNode;
  fluid?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function Logo() {
  return (
    <Typography
      variant="h3"
      sx={{
        // fontFamily: 'Alexandria',
        fontSize: '1.9rem',
        '&:hover': {
          textDecoration: 'none',
        },
        display: {
          xs: 'block',
          sm: 'flex',
        },
      }}
    >
      {SITE_TITLE}
    </Typography>
  );
}

export default function ClientLayout({ children, fluid = false, maxWidth = 'md' }: LayoutProps) {
  return (
    <ContextProvider>
      <div
        style={{ height: '100%', maxHeight: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Navbar
          siteTitle={SITE_TITLE}
          menuItems={[
            ['about', 'About', '/about'],
            ['cv', 'CV', '/cv'],
            ['portfolio', 'Portfolio', '/portfolio'],
            // ['blog', 'Blog', '/blog'],
            ['contact', 'Contact', '/contact'],
          ]}
          logo={<Logo />}
        />
        <Container
          component={'main'}
          {...(fluid ? { maxWidth: false } : maxWidth ? { maxWidth } : { maxWidth: 'md' })}
          sx={(theme) => ({
            flexGrow: 1,
            py: 2,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.primary.contrastText,
          })}
        >
          {children}
        </Container>
        <Footer height={'2.5rem'} />
      </div>
    </ContextProvider>
  );
}

// export default function Layout({ children, fluid = false, maxWidth }: LayoutProps) {}
