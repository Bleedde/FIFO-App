import { superballs } from "ldrs";
import { useItemContext } from "../../context/useItemContext";

superballs.register();

export const ItemsPreview = () => {
  const { items, itemsLoading } = useItemContext();
  console.log(items);
  return (
    <section className="flex flex-col gap-4 bg-gray-50 border border-[#A64D79] shadow-lg rounded-md py-4 px-6 overflow-y-auto text-lg  size-[300px] max-h-[300px] max-w-[300px]">
      <p className="text-center text-lg font-semibold">Item List</p>
      <ul className="list-disc pl-4 font-medium">
        {itemsLoading ? (
          <div className="flex justify-center pt-11">
            <l-superballs size="40" speed="1.4" color="black" />
          </div>
        ) : items?.length === 0 ? (
          <p className="text-center text-gray-500">No items available</p>
        ) : (
          items?.map((item) => {
            return (
              <li key={item.id} className="">
                {item.value}
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};
