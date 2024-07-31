import { useForm } from "react-hook-form";
import Header from "./Header";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFungiMedicine, addMedicine } from "./services/apiMedicine";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddMedicine() {
  const { register, handleSubmit, reset } = useForm();
  const [catSelect, setCatSelect] = useState(true);
  const [selectedCat, setSelectedCat] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: selectedCat === "insect" ? addMedicine : addFungiMedicine,
    onSuccess: () => {
      alert("Successfully Added");
      reset();
      queryClient.invalidateQueries({ queryKey: ["medicine"] });
    },
    onError: () => {
      alert("Something went wrong");
    },
  });
  function onSubmit(data) {
    if (selectedCat.length === 0) {
      alert("Please add category");
      setCatSelect((s) => !s);
      return;
    }
    mutate(data);
  }
  return (
    <div>
      <Header />
      <div className="pt-[5%] flex flex-col gap-8 justify-center items-center text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-start">
            <h2 className="text-lg py-1.5 font-bold font-kalpurus text-green-700">
              ঔষধের নামঃ
            </h2>
            <input
              type="text"
              name="name"
              id="name"
              {...register("name")}
              className="pl-1 border border-green-700 py-1.5 rounded-md w-[250px] font-kalpurus"
            />
          </div>
          <div className="pt-2">
            <select
              name="category"
              id="category"
              onChange={(e) => setSelectedCat(e.target.value)}
              className={`border ${
                catSelect
                  ? "text-emerald-700 font-semibold border-emerald-700"
                  : "text-red-700 font-semibold border-red-700"
              } py-1.5 pl-1 rounded-md w-[250px] font-kalpurus`}
            >
              <option value="">ক্যাটেগরি পছন্দ করুন</option>
              <option value="insect">বালাইনাশক</option>
              <option value="fungi">ছত্রাকনাশক</option>
            </select>
          </div>
          <div className="text-start">
            <h2 className="text-lg py-1.5 font-bold font-kalpurus text-green-700">
              ঔষধের ডোজঃ
            </h2>
            <textarea
              name="dose"
              id="dose"
              rows="5"
              {...register("dose")}
              className="pl-1 border border-green-700 rounded-md w-[250px] font-kalpurus"
            ></textarea>
          </div>
          <div className="pt-2">
            <button
              disabled={isLoading}
              className="w-[250px] text-lg cursor-pointer py-1.5 px-6 rounded-md text-white bg-emerald-700 font-kalpurus font-semibold"
            >
              সাবমিট করুন
            </button>
          </div>
          <div className="pt-2 flex gap-2 w-[250px] text-lg font-kalpurus font-bold">
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
        </form>
      </div>
    </div>
  );
}

export default AddMedicine;
