import { USE_FIREBASE } from "@/config";
import { logout } from "@/utils/firebase";
import { signOut as _signOut } from "next-auth/react";

interface SignOutOptions {
  callbackUrl?: string;
}

export const signOut = ({ callbackUrl }: SignOutOptions) => {
  if (USE_FIREBASE) {
    return logout();
  } else {
    return _signOut({ callbackUrl });
  }
};
