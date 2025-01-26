import { useNavigate } from "react-router-dom";
import { logout } from "../../auth";

export const ButtonsActions = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center space-y-4 bg-gray-50 border border-[#A64D79] shadow-lg rounded-md p-4 text-lg font-semibold text-white size-[300px]">
      {/* 
      FUTURE IMPLEMENTATION - Attend item
      <button className="bg-[#C890A7] p-2 rounded-md hover:bg-[#6A1E55] transition">
        Attend item
      </button> */}
      <iframe
        src="https://giphy.com/embed/ShRRL5pf8ZvoY"
        width="200"
        height="200"
        className="pointer-events-none rounded-xl"
        allowFullScreen={false}
      ></iframe>

      <button
        className="p-2 bg-[#A64D79] rounded-md hover:bg-[#6A1E55] transition w-full"
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
