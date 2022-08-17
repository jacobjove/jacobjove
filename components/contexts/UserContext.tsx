import { User } from "@/graphql/generated/models/user.model";
import { GET_USER } from "@/graphql/generated/queries/user.queries";
import { ApolloError, useQuery } from "@apollo/client";
import { Session } from "next-auth";
import { createContext, FC, ReactNode, useContext } from "react";

interface UserContextData {
  user: User | undefined;
  loading: boolean;
  error?: ApolloError | undefined;
}

const UserContext = createContext<UserContextData>({
  user: undefined,
  loading: true,
});

export default UserContext;

interface UserContextProviderProps {
  session?: Session;
  children: ReactNode;
}

export const UserContextProvider: FC<UserContextProviderProps> = ({ session, children }) => {
  const email = session?.user?.email;
  const { data, loading, error } = useQuery(GET_USER, { variables: { where: { email } } });
  const contextData = { user: data?.user, loading, error };
  console.log("Rendering UserContextProvider with user:", data, loading, error);
  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};

export const useUser = ({ required } = { required: false }): UserContextData => {
  const { user, loading, error } = useContext(UserContext);
  if (!user && !loading) console.log("useUser: User is not yet available!");
  if (required && !user) {
    // console.error("User is required but is not set!");
  }
  return { user, loading, error };
};
