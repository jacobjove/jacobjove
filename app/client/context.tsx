'use client';

import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';
import MDXProvider from '@app/components/MDXProvider';

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  return (
    <SessionProvider>
      <MDXProvider>{children}</MDXProvider>
    </SessionProvider>
  );
}
