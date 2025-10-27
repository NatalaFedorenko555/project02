import { createContext } from "react";
import type { User } from "../components/types/User";

interface AuthContextType{
    user: User|undefined;
    setUser: (React.Dispatch<React.SetStateAction<User | undefined>>) ;//тип setUser из AuchProvider

}
export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

