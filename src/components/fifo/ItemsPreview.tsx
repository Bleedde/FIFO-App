import { useItemContext } from "../../context/useItemContext";

export const ItemsPreview = () => {
  const { items } = useItemContext();
  return (
    <section className="flex flex-col gap-4 bg-gray-50 border border-[#A64D79] shadow-lg rounded-md py-4 px-6 overflow-y-auto text-lg  size-[300px] max-h-[300px] max-w-[300px]">
      <p className="text-center text-lg font-semibold">Item List</p>
      <ul className="list-disc pl-4 font-medium">
        {items.map((item) => {
          return (
            <li key={item} className="">
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
