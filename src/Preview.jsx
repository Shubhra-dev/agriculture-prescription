import Header from "./Header";
import { usePrescription } from "./PrescriptionProvider";
import { IoPrintOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "./assets/mainLogo.png";
import MainHeader from "./MainHeader";

// Get current date
const currentDate = new Date();

// // Format time in Bengali
// const timeOptions = {
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   hour12: true,
// };
// const formattedTime = currentDate.toLocaleTimeString("bn-BD", timeOptions);

// Format date in Bengali
const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = currentDate.toLocaleDateString("bn-BD", dateOptions);

function Preview() {
  const navigate = useNavigate();
  const {
    addedMedicines,
    dayToCome,
    addedFungiMedicines,
    farmerInfo,
    problem,
    analysis,
    solution,
  } = usePrescription();
  const handlePrint = () => {
    // Hide elements with the "no-print" class
    const noPrintElements = document.querySelectorAll(".no-print");
    noPrintElements.forEach((el) => {
      el.style.display = "none";
    });

    // Trigger print
    window.print();

    // After printing, revert the "no-print" elements to visible
    noPrintElements.forEach((el) => {
      el.style.display = "";
    });
  };
  return (
    <>
      <MainHeader />
      <div className="w-full md:w-[794px] m-auto font-kalpurus printable">
        <div className="pt-6">
          <Header page="p" />
        </div>
        <div className="border-b border-b-emerald-700 pt-1.5 text-lg">
          <div className="flex justify-between px-4">
            <div>
              <span className="font-bold">কৃষকের নামঃ </span>
              {`${farmerInfo.name}`}
            </div>
            <div>
              <span className="font-bold">ফসলের নামঃ </span>
              {`${farmerInfo.cropName}`}
            </div>
          </div>
          <div className="flex justify-between px-4">
            <div>
              <span className="font-bold">কৃষকের ঠিকানাঃ </span>
              {`${farmerInfo.address}`}
            </div>
            <div>
              <span className="font-bold">মোবাইল নংঃ </span>
              {`${farmerInfo.phone}`}
            </div>
            <div className="font-bold">তারিখঃ {formattedDate}</div>
          </div>
        </div>
        <div className="flex text-lg">
          <div className="w-1/4 px-2 py-4">
            <div>
              <p className="underline font-bold">সমস্যা</p>
              <div>
                {problem.length > 0 && (
                  <div className="text-black font-kalpurus text-lg font font-base">
                    {problem.map((prb, index) => (
                      <div key={index} className=" flex gap-4 items-start">
                        <div>
                          <h1>
                            {index + 1}. {prb}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="pt-4">
              <p className="underline font-bold">Analysis</p>
              {analysis.length > 0 && (
                <div className="text-black font-kalpurus text-lg font font-base">
                  {analysis.map((an, index) => (
                    <div key={index} className=" flex gap-4 items-start">
                      <div>
                        <h1>
                          {index + 1}. {an}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-10 flex gap-2 w-full flex-wrap">
              <div
                onClick={handlePrint}
                className="no-print hover:bg-emerald-600 cursor-pointer flex gap-2 items-center bg-emerald-700 text-white px-2 py-1.5 rounded-md"
              >
                <IoPrintOutline />
                <p>Print</p>
              </div>
              <div
                onClick={() => navigate(-1)}
                className="no-print hover:bg-emerald-600 cursor-pointer flex gap-2 items-center bg-emerald-700 text-white px-2 py-1.5 rounded-md"
              >
                <FaRegEdit />
                <p>Edit</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 px-2 py-4 border-l border-l-emerald-700">
            <p className="underline font-bold">সমাধান</p>
            {solution.length > 0 && (
              <div className="text-black font-kalpurus text-lg font font-base">
                {solution.map((sol, index) => (
                  <div key={index} className=" flex gap-4 items-start">
                    <div>
                      <h1>
                        {index + 1}. {sol}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2 pt-4">
              {addedMedicines.length > 0 && (
                <div className="w-1/2">
                  <p className="font-bold pb-2 underline">বালাইনাশক ঔষধ - </p>
                  {addedMedicines.map((med, index) => (
                    <div key={index} className="pb-1.5">
                      <h2 className="font-bold text-xl">
                        {index + 1}. {med.name}
                      </h2>
                      <h3 className="pl-6">
                        <span className="font-bold">Dose: </span>
                        {med.dose}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
              {addedFungiMedicines.length > 0 && (
                <div className="w-1/2">
                  <p className="font-bold pb-2 underline">ছত্রাকনাশক ঔষধ - </p>
                  {addedFungiMedicines.map((med, index) => (
                    <div key={index} className="pb-1.5">
                      <h2 className="font-bold text-xl">
                        {index + 1}. {med.name}
                      </h2>
                      <h3 className="pl-6">
                        <span className="font-bold">Dose: </span>
                        {med.dose}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-center pt-4">
              <span className="font-bold">{dayToCome} দিন</span> পরে আবার দেখা
              করুন
            </div>
          </div>
        </div>
        <div className="fixed bottom-2 left-[40%] flex items-center">
          <h2 className="font-kalpurus text-lg font-bold text-green-900">
            Powered by-
          </h2>
          <img src={logo} alt="log" className="h-8" />
        </div>
      </div>
    </>
  );
}

export default Preview;
