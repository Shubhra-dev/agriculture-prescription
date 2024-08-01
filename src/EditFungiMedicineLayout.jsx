import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditFungiModal from "./EditFungiModal";
import { useNavigate } from "react-router-dom";
import { searchfungiMedicine, showFungiMedicine } from "./services/apiMedicine";
import { MdSearch } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import MainHeader from "./MainHeader";

function EditFungiMedicineLayout() {
  const [edit, setEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [stateData, setStateData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fecthData() {
      setIsLoading(true);
      if (query.length < 2) {
        const { data, error } = await showFungiMedicine();
        if (error) {
          setStateData([error]);
          setIsLoading(false);
          return;
        }
        setStateData(data);
        setIsLoading(false);
      } else {
        const { data, error } = await searchfungiMedicine(query);
        console.log(data, error);
        if (error) {
          setStateData([error]);
          setIsLoading(false);
          return;
        }
        setStateData(data);
        setIsLoading(false);
      }
    }
    fecthData();
  }, [edit, query]);
  return (
    <>
      <MainHeader />
      <div className="w-full md:w-5/6 m-auto pt-2 relative">
        <div className="flex items-center justify-end py-2">
          <div className="flex items-center border font-kalpurus border-gray-400 rounded-md bg-slate-200">
            <MdSearch className="text-xl mx-2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-2 py-1.5 rounded-md bg-slate-200"
              placeholder="Search.."
            />
          </div>
        </div>
        {edit && (
          <EditFungiModal
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
        {isLoading && (
          <div className="flex items-center gap-1 font-kalpurus text-green-900 text-xl font-bold w-max m-auto py-4">
            <LuLoader className="animate-spin" />
            <p>লোড হচ্ছে. . .</p>
          </div>
        )}
        {stateData.map((item) => (
          <div
            key={item.id || 1}
            className="mt-1 py-1 px-4 bg-slate-50 flex items-center font-kalpurus text-green-900 text-[18px] divide-x font-medium justify-between"
          >
            <div className="w-[25%] text-center">
              {item.name || item.message}
            </div>
            <div className="w-[50%] text-center">
              {item.dose || item.message}
            </div>
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
    </>
  );
}

export default EditFungiMedicineLayout;
