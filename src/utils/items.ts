export const addItem = (items: string[], newItem: string) => {
  return [...items, newItem];
};

export const removeItem = (items: string[], itemToRemove: string) => {
  return items.filter((item) => item !== itemToRemove);
};
