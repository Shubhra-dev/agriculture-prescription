import { usePrescription } from "./PrescriptionProvider";

function PrescriptionHeader() {
  const { farmerInfo, setFarmerInfo } = usePrescription();
  return (
    <div className="bg-green-700 py-4">
      <div className="w-5/6 m-auto">
        <div className="sm:flex sm:justify-between sm:items-center pb-2">
          <div className="flex gap-2 items-center pb-2">
            <h2 className="text-md sm:text-lg font-bold font-kalpurus text-white">
              কৃষকের নামঃ
            </h2>
            <input
              type="text"
              name="name"
              value={farmerInfo.name}
              onChange={(e) =>
                setFarmerInfo({ ...farmerInfo, name: e.target.value })
              }
              id="name"
              className="font-kalpurus border border-gray-400 py-1.5 rounded-md w-[250px]"
            />
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="text-md sm:text-lg font-bold font-kalpurus text-white">
              ফসলের নামঃ
            </h2>
            <input
              type="text"
              name="cropName"
              value={farmerInfo.cropName}
              onChange={(e) =>
                setFarmerInfo({ ...farmerInfo, cropName: e.target.value })
              }
              id="cropName"
              className="font-kalpurus border border-gray-400 py-1.5 rounded-md w-[250px]"
            />
          </div>
        </div>
        <div className="sm:flex sm:justify-between sm:items-center sm:mt-4">
          <div className="flex gap-2 items-center pb-2">
            <h2 className="text-md sm:text-lg font-bold font-kalpurus text-white">
              কৃষকের ঠিকানাঃ
            </h2>
            <input
              type="text"
              name="address"
              value={farmerInfo.address}
              onChange={(e) =>
                setFarmerInfo({ ...farmerInfo, address: e.target.value })
              }
              id="address"
              className="font-kalpurus border border-gray-400 py-1.5 rounded-md w-[250px]"
            />
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="text-md sm:text-lg font-bold font-kalpurus text-white">
              মোবাইল নংঃ
            </h2>
            <input
              type="text"
              name="phone"
              value={farmerInfo.phone}
              onChange={(e) =>
                setFarmerInfo({ ...farmerInfo, phone: e.target.value })
              }
              id="phone"
              className="font-kalpurus border border-gray-400 py-1.5 rounded-md w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrescriptionHeader;
