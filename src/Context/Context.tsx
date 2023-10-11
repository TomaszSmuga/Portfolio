import { createContext } from "react";

interface UserContextProps {
    user: any
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

interface AuthContextProviderProps {
    children: ReactNode;
  }

export const AuthContextProvider({children}) => {

}