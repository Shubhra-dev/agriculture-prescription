import { useState } from "react";
import { updateFungiMedicine } from "./services/apiMedicine";

function EditFungiModal({ item, setEdit, stateData, setStateData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: item.name,
    dose: item.dose,
    id: item.id,
  });
  async function handleClick() {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const updatedData = await updateFungiMedicine(
        formData.id,
        formData.name,
        formData.dose
      );
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="fixed font-kalpurus w-full md:w-[600px] top-[30%] left-0 sm:left-[35%] py-6 px-10 bg-white border-2 border-green-900">
      <h2 className="text-center text-2xl font-semibold text-green-900 py-2">
        ইডিট করুন
      </h2>
      <div className="flex flex-col gap-3 justify-center items-center">
        <input
          className="w-5/6 block bg-green-50 py-2 px-5 rounded-md border border-green-900 text-xl font-medium"
          type="text"
          name="name"
          id={formData.dose}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="w-5/6 block bg-green-50 py-2 px-5 rounded-md border border-green-900 text-xl font-medium"
          type="text"
          name="dose"
          id={formData.dose}
          value={formData.dose}
          onChange={(e) => setFormData({ ...formData, dose: e.target.value })}
        />
      </div>
      {error && <p>{error}</p>}
      <div className="flex gap-3 justify-center items-center py-4">
        <button
          onClick={() => setEdit(null)}
          className="bg-red-700 text-white font-medium py-1.5 px-3 text-[20px] rounded-md"
        >
          ফিরে আসুন
        </button>
        <button
          disabled={success}
          onClick={handleClick}
          className="bg-green-900 text-white font-medium py-1.5 px-3 text-[20px] rounded-md"
        >
          {isLoading ? "আপডেট হচ্ছে.." : success ? "আপডেট সম্পন্ন" : "আপডেট"}
        </button>
      </div>
    </div>
  );
}

export default EditFungiModal;
