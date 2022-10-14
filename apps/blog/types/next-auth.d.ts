import { NextPage } from "next";
import "next-auth";
import "next-auth/jwt";

// https://next-auth.js.org/getting-started/typescript
declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    name?: string | null;
    email: string;
  }
  /**
   * Returned by `useSession` and `getSession`; received as a prop on `SessionProvider`.
   */
  interface Session {
    user: User;
    accessToken: string;
    error?: string | null;
  }
  interface Account {
    scope?: string;
    access_token?: string;
    expires_at?: number;
    refresh_token?: string;
  }
  interface PageWithAuth extends NextPage {
    auth?: boolean;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken` when using JWT sessions */
  interface JWT {
    provider?: string;
    providerAccountId?: string;
    accessToken?: string;
    accessTokenExpiry?: number;
    refreshToken?: string;
    error?: string | null;
  }
}
