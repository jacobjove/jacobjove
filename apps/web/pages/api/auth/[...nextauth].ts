import AccountModel from "@web/graphql/generated/models/AccountModel";
import UserModel from "@web/graphql/generated/models/UserModel";
import mongoosePromise from "@web/lib/mongodb";
import { NoUndefinedField } from "@web/types/global";
import NextAuth, { CallbacksOptions, NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AppProviders } from "next-auth/providers";
// import AppleProvider from "next-auth/providers/apple";
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

const { APP_ENV } = process.env;

let useMockProviders = false;
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
    // TODO
    // AppleProvider({
    //   clientId: process.env.AUTH_APPLE_ID ?? "",
    //   clientSecret: process.env.AUTH_APPLE_SECRET ?? "",
    // }),
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
  async signIn({ user: _user, account, profile, email: _email, credentials: _credentials }) {
    // console.log("🔑 signIn", { user, account, profile, email, credentials });
    if (account.provider === "google") {
      // TODO: Allow, but set emailVerified to false
      if (!profile.email_verified) return false;
      // TODO
      // const userFromDb = await prisma.user
      //   .findUnique({
      //     where: {
      //       email: user.email,
      //     },
      //     select: {
      //       accounts: {
      //         where: {
      //           provider: account.provider,
      //           remoteId: account.providerAccountId,
      //         },
      //         select: { scopes: true },
      //       },
      //     },
      //   })
      //   .catch(console.error);
      // if (userFromDb && userFromDb.accounts.length) {
      //   // Unfortunately, if we have requested an additional scope (e.g., for calendar
      //   // integration), that scope is lost the next time the user authenticates with
      //   // their third-party (...Google) account. This will require a proper solution
      //   // of some kind, but for now, we check to see if scopes have been reset, and if
      //   // so, we require the user to re-authenticate while explicitly requesting the
      //   // previously granted scopes. This would be totally unnecessary if we just
      //   // configured NextAuth to always request all the scopes that we might want
      //   // (including calendar, etc.), but if we want to allow the user to use OAuth
      //   // without providing access to their calendar or other data, we'll need to
      //   // figure out a way to keep track of what scopes should be requested during
      //   // the sign-in process, so that scopes are not reset.
      //   const oldScopes = userFromDb.accounts[0].scopes;
      //   const newScopes = account.scope?.split(" ") ?? [];
      //   if (!oldScopes.every((scope) => newScopes.includes(scope))) {
      //     const scopesToRequest = [...new Set([...oldScopes, ...newScopes])];
      //     // TODO: figure out how to preserve callback URL instead of redirecting to app home
      //     return `${process.env.NEXTAUTH_URL}/auth/signin?provider=${
      //       account.provider
      //     }&scope=${scopesToRequest.join(",")}&callbackUrl=${process.env.NEXTAUTH_URL}/app`;
      //   }
      // }
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
      token.accessTokenExpiry = account.expires_at ? account.expires_at * 1000 : undefined;
      token.refreshToken = account.refresh_token;
      if (Object.values(token).every((v) => typeof v !== "undefined")) {
        const freshToken = token as NoUndefinedField<typeof token>;
        const provider_remoteId = {
          provider: freshToken.provider,
          remoteId: freshToken.providerAccountId,
        };
        const commonAccountData = {
          scopes: freshToken.scopes,
          accessToken: freshToken.accessToken,
          accessTokenExpiry: new Date(freshToken.accessTokenExpiry),
          refreshToken: freshToken.refreshToken,
        };
        await mongoosePromise;
        console.error("UPSERTING USER...");
        const userUpsertResult = await UserModel.findOneAndUpdate(
          { email: token.email },
          {
            name: token.name,
            email: token.email,
            lastLogin: new Date(),
            image: token.picture,
          },
          {
            upsert: true,
            new: true,
            returnDocument: "after",
            runValidators: true,
            setDefaultsOnInsert: true,
            rawResult: true,
          }
        );
        const user = userUpsertResult.value;
        if (!user) throw new Error("Failed to upsert user!");
        // TODO: avoid awaiting?
        if (!user.accounts?.some((a) => a.provider === freshToken.provider)) {
          await AccountModel.create({
            ...provider_remoteId,
            ...commonAccountData,
            userId: user._id,
          }).then(async (account) => {
            await UserModel.updateOne({ email: token.email }, { $push: { accounts: account } });
          });
        }
      }
    }
    // Return the previous token if the access token has not expired yet.
    if (token.accessTokenExpiry && Date.now() < token.accessTokenExpiry) {
      return token;
    } else if (token) {
      // Attempt to update the token.
      console.log(
        `🔑 Attempting to update token because ${Date.now()} > ${token.accessTokenExpiry}`
      );
      return refreshAccessToken(token);
    }
    return token;
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
  // events: {
  //   async signOut(message) {
  //     console.log("🔑 signOut... TODO: sign out other windows?", { message });
  //   },
  // },
  providers,
  secret: process.env.SECRET_KEY,
  // https://next-auth.js.org/configuration/options#session
  session: { strategy: "jwt" },
};

export default NextAuth(authOptions);
