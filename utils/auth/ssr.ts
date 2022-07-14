import { USE_FIREBASE } from "@/config";
import { getAuthTokenFromAuthUser, getAuthTokenFromNextAuthSession } from "@/utils/auth/adapters";
import { GetServerSidePropsContext } from "next";
// import admin from "@/utils/firebase/admin";
import { getSession } from "next-auth/react";
import { getAuthUserTokensFromCookie, verifyIdToken } from "next-firebase-auth";

type Context = Pick<GetServerSidePropsContext, "req" | "res">;

export const getAuth = async (ctx: Context, required: boolean | undefined = false) => {
  // console.log(">>> getAuth");
  // console.log(">>> getAuth.ctx.req.url", ctx.req.url);
  // console.log(">>> getAuth.ctx.req.cookies['SelfBuilder.AuthUserTokens']", ctx.req.cookies["SelfBuilder.AuthUserTokens"]);
  if (USE_FIREBASE) {
    const tokens = getAuthUserTokensFromCookie(ctx);
    const authUser = tokens ? await verifyIdToken(tokens.idToken, tokens.refreshToken) : null;
    if (authUser?.id) return { token: getAuthTokenFromAuthUser(authUser) };
    console.log(">>> getAuth: failed to auth");
    if (required) {
      console.log(">>> getAuth: Writing redirect to response...");
      ctx.res.writeHead(302, { Location: "/auth/signin" });
      ctx.res.end();
    }
    return {
      token: null,
    };
  } else {
    const session = await getSession({ req: ctx.req });
    return {
      token: session ? getAuthTokenFromNextAuthSession(session) : null,
    };
  }
};
