import { User } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthStateChanged, getData, Item } from "../auth";
import { ItemContext } from "./ItemContext";

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [itemsLoading, setItemsLoading] = useState(false);
  const [items, setItems] = useState<Item[] | undefined>([]);
  const isUserLoggedIn = user !== null;

  useEffect(() => {
    const unsubscribe = AuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      if (user) {
        try {
          setItemsLoading(true);
          const userItems = await getData();
          console.log(userItems, "userItems");
          setItems(userItems);
        } catch (error) {
          console.error("Error fetching user items:", error);
        } finally {
          setItemsLoading(false);
        }
      } else {
        setItems([]);
      }
    };

    fetchItems();
  }, [user]);

  return (
    <ItemContext.Provider
      value={{
        user,
        setUser,
        isUserLoggedIn,
        loading,
        items,
        setItems,
        itemsLoading,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
