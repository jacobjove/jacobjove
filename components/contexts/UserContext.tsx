import { GET_USER } from "@/graphql/queries";
import { User as RawUser } from "@/graphql/schema";
import { useQuery } from "@apollo/client";
import isObject from "lodash/isObject";
import { useSession } from "next-auth/react";
import { createContext, FC, useMemo } from "react";

export interface UserSettings {
  [key: string]: any;
}

export type User = Omit<RawUser, "settings"> & {
  settings: UserSettings;
};

const UserContext = createContext<User | null>(null);

export default UserContext;

export const UserContextProvider: FC = ({ children }) => {
  const { data: session } = useSession();
  // TODO: useLazyQuery after session is loaded?
  const { data, loading: _loading } = useQuery<{ user: User }>(GET_USER, {
    skip: !session?.user?.id,
    variables: { userId: session?.user?.id },
  });
  const user = useMemo(() => {
    let user = data?.user ?? null;
    if (user?.settings) {
      if (!isObject(user.settings)) {
        user = { ...user, settings: JSON.parse(user.settings) } as User;
      } else console.log("あら?");
    }
    return user;
  }, [data]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
