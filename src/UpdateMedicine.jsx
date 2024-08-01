import MainHeader from "./MainHeader";
import { useNavigate } from "react-router-dom";

function UpdateMedicine() {
  const navigate = useNavigate();
  return (
    <>
      <MainHeader />
      <div className="w-full md:w-5/6 md:m-auto">
        <div className="pt-[10%] flex flex-col gap-8 justify-center items-center text-center">
          <div
            onClick={() => navigate("/update_general_medicine")}
            className="w-3/4 sm:w-1/5 text-xl cursor-pointer py-4 px-6 rounded-md text-white bg-green-700 font-kalpurus font-semibold"
          >
            বালাইনাশক
          </div>
          <div
            onClick={() => navigate("/update_fungi_medicine")}
            className="w-3/4 sm:w-1/5 text-xl cursor-pointer py-4 px-6 rounded-md text-white bg-green-700 font-kalpurus font-semibold"
          >
            ছত্রাকনাশক
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateMedicine;
