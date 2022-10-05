import { ApolloError, useQuery } from "@apollo/client";
import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { GET_USER } from "@web/generated/graphql/queries/user.queries";
import { signOut, useSession } from "next-auth/react";
import { createContext, FC, ReactNode, useContext, useEffect } from "react";

interface UserContextData {
  user: UserFragment | undefined;
  loading: boolean;
  error?: ApolloError | undefined;
}

const UserContext = createContext<UserContextData>({
  user: undefined,
  loading: true,
});

export default UserContext;

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const { data: session } = useSession();
  const email = session?.user.email;
  const { data, loading, error } = useQuery<{ user: UserFragment }>(GET_USER, {
    variables: { where: { email } },
    skip: !session,
  });
  const contextData = { user: data?.user, loading, error };

  // If there's a session but no user, something has gone wrong. Sign out.
  useEffect(() => {
    if (session && !loading && !data?.user) signOut();
  }, [session, loading, data?.user]);

  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextData => {
  return useContext(UserContext);
};
