import prisma from '@/lib/prisma';
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AppProviders } from 'next-auth/providers';

const { VERCEL_ENV, APP_ENV } = process.env;
let useMockProviders = VERCEL_ENV === 'preview';
if (APP_ENV === 'test') {
  console.log('⚠️ Using mocked auth providers');
  useMockProviders = true;
}

const providers: AppProviders = [];
if (useMockProviders) {
  const credentials = {
    name: { type: 'test' },
  }
  const authorize = async (credentials) => {
    const user = {
      id: credentials.name,
      name: credentials.name,
      email: credentials.name,
    };
    return user;
  }
  providers.push(
    CredentialsProvider({
      id: 'google',
      name: 'Mocked Google',
      authorize,
      credentials,
    }),
    CredentialsProvider({
      id: 'github',
      name: 'Mocked GitHub',
      authorize,
      credentials,
    }),
  );
} else {
  providers.push(
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  );
}

// https://next-auth.js.org/configuration/callbacks
const callbacks = {
  async signIn({ user, account, profile, email, credentials }) {
    if (account.provider === "google") {
      return profile.email_verified
    }
    return true // Do different verification for other providers that don't have `email_verified`
  },
  // async redirect({ url, baseUrl }) {
  //   return baseUrl
  // },
  // https://next-auth.js.org/configuration/callbacks#jwt-callback
  async jwt({ token, account }) {
    // The account is only passed the first time this callback is called on a new session.
    // In subsequent calls, only the token is available.
    if (account) {
      // Persist the OAuth access_token to the token.
      token.accessToken = account.access_token
    }
    return token
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
    if (token) {
      session.accessToken = token.accessToken
    }
    if (session.user && !session.user.id) {
      // Get the user's ID.
      let user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
        select: {
          id: true
        },
      });
      if (!user) {
        // Create a new user.
        user = await prisma.user.create({
          data: {
            email: session.user.email,
            name: session.user.name,
          },
        })
      }
      session.user.id = user.id
    }
    return session;
  }
}

export default NextAuth({
  // https://next-auth.js.org/configuration/options#callbacks
  callbacks,
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
});
