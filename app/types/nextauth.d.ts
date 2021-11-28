import "next-auth";

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
    }
    accessToken: string
  }
}