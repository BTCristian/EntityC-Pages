import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/get-in-touch");
  };

  return (
    <div className=" mt-10">
      <button
        onClick={routeChange}
        className="border-4 border-red-500 text-red-500 text-xl px-6 py-2 hover:bg-red-500 hover:text-white transition"
      >
        GET IN TOUCH
      </button>
    </div>
  );
};

export default GetInTouch;
