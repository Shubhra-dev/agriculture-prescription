import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";
import { searchMedicine, showMedicine } from "./services/apiMedicine";

function EditMedicineLayout() {
  const [edit, setEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [stateData, setStateData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    async function fecthData() {
      if (query.length < 2) {
        const data = await showMedicine();
        console.log(data);
        setStateData(data);
        setIsLoading(false);
      } else {
        const data = await searchMedicine(query);
        setStateData(data);
        setIsLoading(false);
      }
    }
    fecthData();
  }, [edit, query]);
  return (
    <div className="w-full pt-4 relative">
      <div className="flex items-center justify-center gap-6 font-kalpurus pb-4">
        <div
          onClick={() => navigate("/")}
          className="text-xl font-semibold cursor-pointer px-3 py-1.5 bg-green-900 text-white rounded-md"
        >
          হোম
        </div>
        <div
          onClick={() => navigate("/prescription")}
          className="text-xl font-semibold cursor-pointer px-3 py-1.5 bg-green-900 text-white rounded-md"
        >
          প্রেসক্রিপশন
        </div>
        <div
          onClick={() => navigate("/add-medicine")}
          className="text-xl font-semibold cursor-pointer px-3 py-1.5 bg-green-900 text-white rounded-md"
        >
          ঔষধ যোগ
        </div>
      </div>
      {edit && (
        <EditModal
          item={edit}
          setEdit={setEdit}
          stateData={stateData}
          setStateData={setStateData}
        />
      )}
      <div className="py-1 px-4 bg-green-900 flex items-center font-kalpurus text-white text-xl divide-x font-medium justify-between">
        <div className="w-[25%] text-center">ঔষধের নাম</div>
        <div className="w-[50%] text-center">ঔষধের ডোজ</div>
        <div className="w-[25%] text-center">ইডিট</div>
      </div>
      {stateData.map((item) => (
        <div
          key={item.id}
          className="mt-1 py-1 px-4 bg-slate-50 flex items-center font-kalpurus text-green-900 text-[18px] divide-x font-medium justify-between"
        >
          <div className="w-[25%] text-center">{item.name}</div>
          <div className="w-[50%] text-center">{item.dose}</div>
          <div
            onClick={() => setEdit(item)}
            className="w-[25%] flex items-center justify-center gap-1 cursor-pointer"
          >
            <FaRegEdit />
            <p>Edit</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditMedicineLayout;
