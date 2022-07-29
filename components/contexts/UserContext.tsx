import { GET_USER_BY_ID } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { printError } from "@/utils/apollo/error-handling";
import { useLazyQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { createContext, FC, useContext, useEffect } from "react";

const UserContext = createContext<User | null>(null);

export default UserContext;

export const UserContextProvider: FC = ({ children }) => {
  const { data: session, status } = useSession();
  const loadingAuth = status === "loading";
  const [getUser, { loading: loadingUser, error, data }] = useLazyQuery<{ user: User }>(
    GET_USER_BY_ID
  );
  const loading = loadingAuth || loadingUser;

  useEffect(() => {
    if (session?.user.id) {
      console.log(">>> Getting user...");
      getUser({
        variables: { id: session.user.id },
      }).catch(printError);
    } else if (!loading && error) printError(error);
  }, [session, loading, error, getUser]);

  return <UserContext.Provider value={data?.user ?? null}>{children}</UserContext.Provider>;
};

export const useUser = ({ required } = { required: false }): User | null => {
  const user = useContext(UserContext);
  if (required && !user) console.error("User is required but is not set!");
  return user;
};
