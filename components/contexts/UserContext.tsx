import { User } from "@/graphql/schema";
import { createContext } from "react";

export interface UserSettings {
  [key: string]: any;
}

export type ProcessedUser = Omit<User, "settings"> & {
  settings: UserSettings;
};

const UserContext = createContext<ProcessedUser | null>(null);

export default UserContext;
