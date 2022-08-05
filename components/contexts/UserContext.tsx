import { GET_USER } from "@/graphql/schema/generated/queries/user.queries";
import { User } from "@/graphql/schema/generated/models/user.model";
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
    GET_USER
  );
  const loading = loadingAuth || loadingUser;

  useEffect(() => {
    if (session?.user) {
      getUser({
        variables: { where: { email: session.user.email } },
      });
    } else if (!loading && error) printError(error);
  }, [session, loading, error, getUser]);

  return <UserContext.Provider value={data?.user ?? null}>{children}</UserContext.Provider>;
};

export const useUser = ({ required } = { required: false }): User | null => {
  const user = useContext(UserContext);
  if (required && !user) console.error("User is required but is not set!");
  return user;
};
