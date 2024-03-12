import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import mongoClientPromise from "@utils/mongo";
import { PageConfig } from "next";
import NextAuth, { CallbacksOptions, NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AppProviders } from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  });

const APP_ENV = process.env.APP_ENV;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;

if (!ADMIN_EMAIL) throw new Error("ADMIN_EMAIL is not set.");

let useMockProviders = false;
if (APP_ENV === "test") {
  console.log("⚠️ Using mocked auth providers");
  useMockProviders = true;
}

// interface MockCredentials {
//   name: string;
// }

const providers: AppProviders = [];
if (useMockProviders) {
  // const credentials = {
  //   name: { type: "test" },
  // };
  // const authorize = async (credentials?: MockCredentials) => {
  //   const user = {
  //     id: credentials?.name,
  //     name: credentials?.name,
  //     email: credentials?.name,
  //   };
  //   return user;
  // };
  // providers.push(
  //   CredentialsProvider({
  //     id: "apple",
  //     name: "Mocked Apple",
  //     authorize,
  //     credentials,
  //   }),
  //   CredentialsProvider({
  //     id: "google",
  //     name: "Mocked Google",
  //     authorize,
  //     credentials,
  //   }),
  //   CredentialsProvider({
  //     id: "github",
  //     name: "Mocked GitHub",
  //     authorize,
  //     credentials,
  //   })
  // );
} else {
  providers.push(
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
      authorization: GOOGLE_AUTHORIZATION_URL,
      checks: ["state"],
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),
    // https://next-auth.js.org/providers/credentials
    CredentialsProvider({
      id: "credentials",
      name: "Credentials", // name to display on the sign-in form ('Sign in with ____')
      credentials: {
        // Specify the fields expected to be submitted in the sign-in form.
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        const usernameIsValid =
          credentials.username === process.env.ADMIN_USERNAME ||
          credentials.username === process.env.ADMIN_EMAIL;
        if (usernameIsValid && credentials.password === process.env.ADMIN_PASSWORD) {
          return {
            id: "admin",
            name: "Admin",
            email: ADMIN_EMAIL,
          };
        }
        return null;
      },
    })
  );
}

// https://next-auth.js.org/configuration/callbacks
const callbacks: CallbacksOptions = {
  async signIn({ user: _user, account, profile, email: _email, credentials: _credentials }) {
    // console.log("🔑 signIn", { user, account, profile, email, credentials });
    if (account?.provider === "google") {
      // TODO: Allow, but set emailVerified to false
      const _profile = profile as { email_verified: boolean };
      if (!_profile?.email_verified) return false;
    }
    return true;
  },
  async redirect({ url, baseUrl }) {
    // console.log("🔑 redirect", { url, baseUrl });
    if (url === baseUrl || url === `${baseUrl}/`) return `${baseUrl}/app`;
    if (url.startsWith(baseUrl)) return url;
    // Allow relative callback URLs.
    if (url.startsWith("/")) return new URL(url, baseUrl).toString();
    return baseUrl;
  },
  // https://next-auth.js.org/configuration/callbacks#jwt-callback
  async jwt({ token, account }) {
    // The account is only passed the first time this callback is called on a new session.
    // In subsequent calls, only the token is available.
    // console.log("🔑 jwt", { token, account });
    if (account) {
      // Persist necessary data to the token.
      token.provider = account.provider;
      token.providerAccountId = account.providerAccountId;
      token.scopes = account.scope?.split(" ");
      token.accessToken = account.access_token;
      if (account.expires_at) {
        token.accessTokenExpiry = account.expires_at * 1000;
        token.refreshToken = account.refresh_token;
      }
    }
    // Return the previous token if the access token has not expired yet.
    if (token.accessTokenExpiry) {
      if (Date.now() < token.accessTokenExpiry) {
        return token;
      } else {
        // Attempt to update the token.
        console.log(`🔑 Attempting to update token because ${Date.now()} > ${token.accessTokenExpiry}`);
        return refreshAccessToken(token);
      }
    }
    return token;
  },
  async session({ session, token }) {
    /*
      Attach the access token (and other desired data) to the session.

      An incoming session might looks like this:
      {
        user: {
          name: 'Jacob Jove',
          email: 'jacob.t.fredericksen@gmail.com',
          image: 'https://lh3.googleusercontent.com/a-/AOh14Ggi_RwygCCU2-fH3tOLF8o8l9rlTJALV_TqnJXP=s96-c'
        },
        expires: '2021-12-27T17:57:11.871Z'
      }

      And the token might look like this:
      {
        name: 'Jacob Jove',
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
    if (token.error) session.error = token.error;
    if (!session?.user) return session;
    if (token.accessToken) session.accessToken = token.accessToken;
    return session;
  },
};

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpiry`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token: JWT) {
  // console.log("🔑 refreshAccessToken", { token });
  let url: string;
  switch (token.provider) {
    case "google":
      url =
        "https://oauth2.googleapis.com/token?" +
        new URLSearchParams({
          client_id: `${process.env.AUTH_GOOGLE_ID}`,
          client_secret: `${process.env.AUTH_GOOGLE_SECRET}`,
          grant_type: "refresh_token",
          refresh_token: `${token.refreshToken}`,
        });
      break;
    default:
      console.error(`Unsupported provider: ${token.provider}`);
      return token;
  }
  return await fetch(url, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
  })
    .then(async (response) => {
      const refreshedTokens = await response.json();
      if (!response.ok) throw refreshedTokens;
      return {
        ...token,
        accessToken: refreshedTokens.access_token,
        accessTokenExpiry: Date.now() + refreshedTokens.expires_in * 1000,
        refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    });
}

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/options#callbacks
  adapter: MongoDBAdapter(mongoClientPromise),
  callbacks,
  debug: process.env.NODE_ENV === "development" && false,
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/signin",
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user'
  },
  providers,
  secret: process.env.SECRET_KEY,
  // https://next-auth.js.org/configuration/options#session
  session: { strategy: "jwt" },
};

const nextAuthHandler = NextAuth(authOptions);

export default nextAuthHandler;

export const config: PageConfig = {
  api: {
    // https://github.com/getsentry/sentry-javascript/issues/3852
    // https://nextjs.org/docs/api-routes/api-middlewares#custom-config
    externalResolver: true,
  },
};
