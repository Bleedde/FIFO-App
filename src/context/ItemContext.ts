import { User } from "firebase/auth";
import { createContext } from "react";
import { Item } from "../auth";

type ContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isUserLoggedIn: boolean;
  loading: boolean;
  items: Item[] | undefined;
  setItems: (items: Item[]) => void;
  itemsLoading: boolean;
};

export const ItemContext = createContext<ContextType | undefined>(undefined);
