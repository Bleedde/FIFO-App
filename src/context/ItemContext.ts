import { User } from "firebase/auth";
import { createContext } from "react";

type ContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isUserLoggedIn: boolean;
  loading: boolean;
  items: string[];
  setItems: (items: string[]) => void;
};

export const ItemContext = createContext<ContextType | undefined>(undefined);
