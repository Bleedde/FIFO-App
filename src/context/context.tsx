import { User } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthStateChanged } from "../auth";
import { ItemContext } from "./ItemContext";

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<string[]>([]);
  const isUserLoggedIn = user !== null;

  useEffect(() => {
    const unsubscribe = AuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ItemContext.Provider
      value={{ user, setUser, isUserLoggedIn, loading, items, setItems }}
    >
      {children}
    </ItemContext.Provider>
  );
};
