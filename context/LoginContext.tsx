import { createContext } from "react";

type LoginContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const LoginContext = createContext<LoginContextType>({
  userName: "",
  setUserName: () => {},
});
