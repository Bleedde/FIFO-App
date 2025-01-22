import { useNavigate } from "react-router-dom";
import { logout } from "../../auth";

export const ButtonsActions = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center space-y-4 bg-gray-50 border border-[#A64D79] shadow-lg rounded-md p-4 text-lg font-semibold text-white size-[300px]">
      <button className="bg-[#C890A7] p-2 rounded-md hover:bg-[#6A1E55] transition">
        Attend item
      </button>

      <button
        className="p-2 bg-[#A64D79] rounded-md hover:bg-[#6A1E55] transition"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Log out
      </button>
    </section>
  );
};
