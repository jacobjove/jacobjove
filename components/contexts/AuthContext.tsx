import { USE_FIREBASE } from "@/config";
import { getAuthTokenFromNextAuthSession } from "@/utils/auth";
// TODO
import { useSession } from "next-auth/react";
import { useAuthUser } from "next-firebase-auth";
import { createContext, ReactElement, useContext } from "react";

export interface AuthToken {
  uid: string;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  error?: string | null;
}

export const AuthContext = createContext<{ token: AuthToken | null; loading: boolean | undefined }>(
  {
    token: null,
    loading: undefined,
  }
);

interface AuthProviderProps {
  children: ReactElement;
}

export function AuthProvider({ children }: AuthProviderProps) {
  if (USE_FIREBASE) {
    const authUser = useAuthUser(); // eslint-disable-line
    const token = authUser.id
      ? {
          uid: authUser.id,
          ...authUser,
        }
      : null;
    // if (!token?.uid) console.error("HERE HERE HERE");
    return (
      <AuthContext.Provider value={{ token, loading: false }}>{children}</AuthContext.Provider>
    );
  } else {
    const { data: session, status } = useSession(); // eslint-disable-line
    const token = session?.user ? getAuthTokenFromNextAuthSession(session) : null;
    return (
      <AuthContext.Provider value={{ token, loading: status === "loading" }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

export const useAuth = () => {
  return useContext(AuthContext);
};
