import { useAuth } from "@/components/contexts/AuthContext";
import { GET_USER } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { printError } from "@/utils/apollo/error-handling";
import { useLazyQuery } from "@apollo/client";
import { createContext, FC, useContext, useEffect } from "react";

const UserContext = createContext<User | null>(null);

export default UserContext;

export const UserContextProvider: FC = ({ children }) => {
  const { token, loading: loadingAuth } = useAuth();
  const [getUser, { loading: loadingUser, error, data }] = useLazyQuery<{ user: User }>(GET_USER);
  const loading = loadingAuth || loadingUser;

  useEffect(() => {
    if (token?.uid) {
      getUser({
        variables: { id: token.uid },
      }).catch(printError);
    } else if (!loading && error) printError(error);
  }, [token, loading, error, getUser]);

  return <UserContext.Provider value={data?.user ?? null}>{children}</UserContext.Provider>;
};

export const useUser = (): User | null => {
  return useContext(UserContext);
};
