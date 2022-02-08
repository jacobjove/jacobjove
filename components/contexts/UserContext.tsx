import { User as RawUser } from "@/graphql/schema";
import { createContext } from "react";

export interface UserSettings {
  [key: string]: any;
}

export type User = Omit<RawUser, "settings"> & {
  settings: UserSettings;
};

const UserContext = createContext<User | null>(null);

export default UserContext;
