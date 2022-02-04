import { User } from "@/graphql/schema";
import { createContext } from "react";

const UserContext = createContext<User | null>(null);

export default UserContext;
