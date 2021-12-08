import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession` and `getSession`; received as a prop on `SessionProvider`.
   */
  interface Session {
    user: {
      name: string
      email: string
      image: string
      id: string
      isAdmin: boolean
    }
    accessToken: string
  }
  interface JWT {
    accessToken: string
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    accessToken?: string
  }
}
