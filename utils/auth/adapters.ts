import { AuthToken } from "@/components/contexts/AuthContext";
import { Session } from "next-auth";
import { AuthUser } from "next-firebase-auth";

export const getAuthTokenFromNextAuthSession = (session: Session): AuthToken => ({
  uid: session.user.id,
  displayName: session.user.name,
  email: session.user.email,
  photoURL: session.user.image,
});

export const getAuthTokenFromAuthUser = (authUser: AuthUser): AuthToken | null => {
  return authUser.id
    ? {
        uid: authUser.id as string,
        ...authUser,
      }
    : null;
};
