import { NormalizedCacheObject } from "@apollo/client";
import { TmpCookiesObj } from "cookies-next/lib/types";
import { Session } from "next-auth";

export interface PageProps {
  session?: Session | null;
  cookies?: TmpCookiesObj;
  __APOLLO_STATE__?: NormalizedCacheObject;
}
