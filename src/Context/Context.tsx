import React, { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Utilities/Firebase/firebaseConfig";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserContextProps {}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const contextValue: UserContextProps = {};

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return UserContext(UserContext);
};
