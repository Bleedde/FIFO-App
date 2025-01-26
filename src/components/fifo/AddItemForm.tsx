import { useState } from "react";
import { toast } from "sonner";
import { addData } from "../../auth";
import { useItemContext } from "../../context/useItemContext";

export const AddItemForm = () => {
  const { items, setItems } = useItemContext();
  const [newItemValue, setNewItemValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (items?.some((item) => item.value === newItemValue)) {
      toast.error("Item already exists, try another one");
      return;
    }

    try {
      const addedItem = await addData({ value: newItemValue });
      if (addedItem) {
        setItems([...(items || []), addedItem]);
        setNewItemValue("");
        toast.success("Item added successfully");
      } else {
        toast.error("Failed to add the item, try again");
      }
    } catch (error) {
      console.error("Error adding item: ", error);
      toast.error("Something went wrong, please try again");
    }
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
            value={newItemValue}
            onChange={(e) => {
              setNewItemValue(e.target.value);
            }}
            className="w-full p-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-[#A64D79] focus:ring-1 focus:ring-[#3B1C32]"
          />
        </label>
        <button
          type="submit"
          disabled={newItemValue === ""}
          className="w-full bg-[#A64D79]  text-white p-2 rounded-md hover:bg-[#6A1E55] disabled:bg-[#C890A7] transition text-lg font-semibold"
        >
          Add
        </button>
      </form>
    </section>
  );
};
