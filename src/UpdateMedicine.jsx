import { useState } from "react";
import Header from "./Header";
import EditMedicineLayout from "./EditMedicineLayout";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UpdateMedicine() {
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="w-full md:w-5/6 md:m-auto">
        {selectedMedicine === "" && (
          <div className="pt-[10%] flex flex-col gap-8 justify-center items-center text-center">
            <div
              onClick={() => setSelectedMedicine("general")}
              className="w-3/4 sm:w-1/5 text-xl cursor-pointer py-4 px-6 rounded-md text-white bg-green-700 font-kalpurus font-semibold"
            >
              বালাইনাশক
            </div>
            <div
              onClick={() => setSelectedMedicine("fungi")}
              className="w-3/4 sm:w-1/5 text-xl cursor-pointer py-4 px-6 rounded-md text-white bg-green-700 font-kalpurus font-semibold"
            >
              ছত্রাকনাশক
            </div>
            <div className="pt-2 flex gap-2 w-[300px] text-lg font-kalpurus font-bold">
              <div
                onClick={() => navigate("/")}
                className="cursor-pointer w-1/2 flex gap-2 items-center justify-center bg-emerald-700 text-white px-2 py-1.5 rounded-md"
              >
                <IoHomeOutline />
                <p>হোম</p>
              </div>
              <div
                onClick={() => navigate("/prescription")}
                className="cursor-pointer w-1/2 flex gap-2 items-center justify-center bg-emerald-700 text-white px-2 py-1.5 rounded-md"
              >
                <FaRegEdit />
                <p>লিখুন</p>
              </div>
            </div>
          </div>
        )}
        {selectedMedicine === "general" && (
          <div>
            <EditMedicineLayout />
          </div>
        )}
        {selectedMedicine === "fungi" && <div>Fungi</div>}
      </div>
    </>
  );
}

export default UpdateMedicine;
