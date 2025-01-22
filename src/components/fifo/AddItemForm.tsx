import { useState } from "react";
import { toast } from "sonner";
import { useItemContext } from "../../context/useItemContext";
import { addItem } from "../../utils/items";

export const AddItemForm = () => {
  const { items, setItems } = useItemContext();
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewItem("");
  };

  return (
    <section className="bg-gray-50 border border-[#A64D79] shadow-lg rounded-md p-4 size-[300px] flex flex-col justify-center">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="item">
          <p className="text-gray-800 text-lg font-semibold text-center">
            Add a new item
          </p>
          <input
            type="text"
            placeholder="Item name"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
            className="w-full p-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-[#A64D79] focus:ring-1 focus:ring-[#3B1C32]"
          />
        </label>
        <button
          onClick={() => {
            if (!items.includes(newItem)) {
              const newItems = addItem(items, newItem);
              setItems(newItems);
              setNewItem("");
              toast.success("Item added successfully");
            } else {
              toast.error("Item already exists, try another one");
            }
          }}
          disabled={newItem === ""}
          className="w-full bg-[#A64D79]  text-white p-2 rounded-md hover:bg-[#6A1E55] disabled:bg-[#C890A7] transition text-lg font-semibold"
        >
          Add
        </button>
      </form>
    </section>
  );
};
