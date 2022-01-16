import "next-auth";
import "next-auth/jwt";

// https://next-auth.js.org/getting-started/typescript
declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: number;
    name: string;
    email: string;
    image: string;
    isAdmin: boolean;
    settings: {
      dashboard?: {
        [key: string]: undefined;
      };
      defaultCalendarId: number;
    };
  }
  /**
   * Returned by `useSession` and `getSession`; received as a prop on `SessionProvider`.
   */
  interface Session {
    user: User;
    accessToken: string;
  }
  interface JWT {
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken` when using JWT sessions */
  interface JWT {
    accessToken?: string;
  }
}
