import prisma from "@/lib/prisma";
import NextAuth, { CallbacksOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AppProviders } from "next-auth/providers";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

type NoUndefinedField<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>;
};

const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  });

const { VERCEL_ENV, APP_ENV } = process.env;
let useMockProviders = VERCEL_ENV === "preview";
if (APP_ENV === "test") {
  console.log("⚠️ Using mocked auth providers");
  useMockProviders = true;
}

interface MockCredentials {
  name: string;
}

const providers: AppProviders = [];
if (useMockProviders) {
  const credentials = {
    name: { type: "test" },
  };
  const authorize = async (credentials?: MockCredentials) => {
    const user = {
      id: credentials?.name,
      name: credentials?.name,
      email: credentials?.name,
    };
    return user;
  };
  providers.push(
    CredentialsProvider({
      id: "apple",
      name: "Mocked Apple",
      authorize,
      credentials,
    }),
    CredentialsProvider({
      id: "google",
      name: "Mocked Google",
      authorize,
      credentials,
    }),
    CredentialsProvider({
      id: "github",
      name: "Mocked GitHub",
      authorize,
      credentials,
    })
  );
} else {
  providers.push(
    AppleProvider({
      clientId: process.env.AUTH_APPLE_ID ?? "",
      clientSecret: process.env.AUTH_APPLE_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
      authorization: GOOGLE_AUTHORIZATION_URL,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    })
  );
}

// https://next-auth.js.org/configuration/callbacks
const callbacks: CallbacksOptions = {
  async signIn({ user, account, profile, email: _email, credentials: _credentials }) {
    // console.log("🔑 signIn", { user, account, profile, email, credentials });
    if (account.provider === "google") {
      // TODO: Allow, but set emailVerified to false
      if (!profile.email_verified) return false;
      const userFromDb = await prisma.user
        .findUnique({
          where: {
            email: user.email,
          },
          select: {
            accounts: {
              where: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
              select: { scopes: true },
            },
          },
        })
        .catch(console.error);
      if (userFromDb && userFromDb.accounts.length) {
        const oldScopes = userFromDb.accounts[0].scopes;
        const newScopes = account.scope?.split(" ") ?? [];
        if (!oldScopes.every((scope) => newScopes.includes(scope))) {
          const scopesToRequest = [...new Set([...oldScopes, ...newScopes])];
          return `${process.env.NEXTAUTH_URL}/auth/signin?provider=${
            account.provider
          }&scope=${scopesToRequest.join(",")}&callbackUrl=${process.env.NEXTAUTH_URL}/app`;
        }
      }
    }
    return true;
  },
  async redirect({ url, baseUrl }) {
    // console.log("🔗 redirect", { url, baseUrl });
    if (url.startsWith(baseUrl)) return url;
    // Allow relative callback URLs.
    if (url.startsWith("/")) return new URL(url, baseUrl).toString();
    return baseUrl;
  },
  // https://next-auth.js.org/configuration/callbacks#jwt-callback
  async jwt({ token, account }) {
    // console.log("🔑 jwt", { token, account });
    // The account is only passed the first time this callback is called on a new session.
    // In subsequent calls, only the token is available.
    if (account) {
      // Persist necessary data to the token.
      token.provider = account.provider;
      token.providerAccountId = account.providerAccountId;
      token.scopes = account.scope?.split(" ");
      token.accessToken = account.access_token;
      token.accessTokenExpiry = account.expires_at ? account.expires_at * 1000 : undefined;
      token.refreshToken = account.refresh_token;
    }
    // Return the previous token if the access token has not expired yet.
    if (token.accessTokenExpiry && Date.now() < token.accessTokenExpiry) return token;
    // Attempt to update the token.
    return refreshAccessToken(token);
  },
  async session({ session, token }) {
    /*
      Attach the access token (and other desired data) to the session.

      An incoming session might looks like this:
      {
        user: {
          name: 'Jacob Fredericksen',
          email: 'jacob.t.fredericksen@gmail.com',
          image: 'https://lh3.googleusercontent.com/a-/AOh14Ggi_RwygCCU2-fH3tOLF8o8l9rlTJALV_TqnJXP=s96-c'
        },
        expires: '2021-12-27T17:57:11.871Z'
      }

      And the token might look like this: 
      {
        name: 'Jacob Fredericksen',
        email: 'jacob.t.fredericksen@gmail.com',
        picture: 'https://lh3.googleusercontent.com/a-/AOh14Ggi_RwygCCU2-fH3tOLF8o8l9rlTJALV_TqnJXP=s96-c',
        sub: '103939397459532242325',
        accessToken: 'ya29.a0ARrdaM8aR-DKoygFFlTF8WaPdI4iihykJvUYI940WPSALlwaZxa35kKSiUxm9BvZlkWQJYyA914Z3gaMnN2YZBg339qD-iRPedsdOobq4mDLJ3QIKcBhEIOjqm0z9wqEaNALubwYNITCTD4cGLyBEmzzC0H4',
        iat: 1638035827,
        exp: 1640627827,
        jti: 'e6a89a68-0554-4930-8b74-32af60148b5f'
      }
    */
    // console.log("🔑 session", { session, token });
    if (!session?.user) return session;
    if (token.accessToken) session.accessToken = token.accessToken;
    if (!session.user.id) {
      // Get the user's ID.
      let user = await prisma.user
        .findUnique({
          where: {
            email: session.user.email,
          },
          select: {
            id: true,
            name: true,
            email: true,
          },
        })
        .catch(console.error);
      if (Object.values(token).every((v) => typeof v !== "undefined")) {
        const freshToken = token as NoUndefinedField<typeof token>;
        const accountIdData = {
          provider: freshToken.provider,
          providerAccountId: freshToken.providerAccountId,
        };
        const commonAccountData = {
          scopes: freshToken.scopes,
          accessToken: freshToken.accessToken,
          accessTokenExpiry: new Date(freshToken.accessTokenExpiry),
          refreshToken: freshToken.refreshToken,
        };
        if (user && Object.values(token).every((v) => typeof v !== "undefined")) {
          await prisma.user
            .update({
              where: { id: user.id },
              data: {
                name: user.name || session.user.name,
                lastLogin: new Date(),
                accounts: {
                  upsert: {
                    where: { provider_providerAccountId: accountIdData },
                    create: { ...accountIdData, ...commonAccountData },
                    update: commonAccountData,
                  },
                },
              },
            })
            .catch(console.error);
        } else {
          // Create a new user.
          user = await prisma.user.create({
            data: {
              email: session.user.email,
              name: session.user.name,
              lastLogin: new Date(),
              accounts: {
                create: { ...accountIdData, ...commonAccountData },
              },
            },
          });
        }
        session.user.id = user.id;
      }
      session.user = {
        ...session.user,
        ...user,
      };
    }
    return session;
  },
};

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token: JWT) {
  console.log("🔑 refreshAccessToken");
  // console.log("🔑 refreshAccessToken", { token });
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: `${process.env.AUTH_GOOGLE_ID}`,
        client_secret: `${process.env.AUTH_GOOGLE_SECRET}`,
        grant_type: "refresh_token",
        refresh_token: `${token.refreshToken}`,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // https://next-auth.js.org/configuration/options#callbacks
  callbacks,
  debug: process.env.NODE_ENV === "development",
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/signin",
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user'
  },
  // events: {
  //   async signOut(message) {
  //     console.log("🔑 signOut... TODO: sign out other windows?", { message });
  //   },
  // },
  providers,
  secret: process.env.SECRET_KEY,
  // https://next-auth.js.org/configuration/options#session
  session: { strategy: "jwt" },
});
