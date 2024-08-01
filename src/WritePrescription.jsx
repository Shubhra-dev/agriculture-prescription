import { useEffect, useState } from "react";
import PrescriptionHeader from "./PrescriptionHeader";
// import { useQueryClient } from "@tanstack/react-query";
import supabase from "../supabase";
import { usePrescription } from "./PrescriptionProvider";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { searchfungiMedicine, searchMedicine } from "./services/apiMedicine";
import MainHeader from "./MainHeader";

function WritePrescription() {
  const navigation = useNavigate();
  const [searchedMedicines, setSearchedMedicines] = useState([]);
  const [searchedFungiMedicines, setSearchedFungiMedicines] = useState([]);
  const [addMed, setAddMed] = useState(true);
  const [addFungi, setAddFungi] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [fungiQuery, setFungiQuery] = useState("");
  const [sol, setSol] = useState("");
  const [prb, setPrb] = useState("");
  const [anl, setAnl] = useState("");
  const {
    addedMedicines,
    setAddedMedicines,
    addedFungiMedicines,
    setAddedFungiMedicines,
    problem,
    setProblem,
    analysis,
    setAnalysis,
    solution,
    setSolution,
    farmerInfo,
    setFarmerInfo,
    dayToCome,
    setDayToCome,
  } = usePrescription();
  // console.log(addedMedicines, problem, analysis, solution, farmerInfo);
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchedMedicines([]);
        return;
      }
      const { data, error } = await searchMedicine(searchQuery); // Adjust 'column_name' to your actual column name
      if (error) {
        console.error("Error fetching data:", error.message);
        setSearchedMedicines([error.message]);
      } else {
        setSearchedMedicines(data || []);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (fungiQuery.trim() === "") {
        setSearchedFungiMedicines([]);
        return;
      }
      const { data, error } = await searchfungiMedicine(fungiQuery); // Adjust 'column_name' to your actual column name
      if (error) {
        console.error("Error fetching data:", error.message);
        setSearchedFungiMedicines([error.message]);
      } else {
        setSearchedFungiMedicines(data || []);
      }
    };
    fetchSearchResults();
  }, [fungiQuery]);
  function handleSearchInputChange(e) {
    setSearchQuery(() => e.target.value);
  }
  function handleFungiInputChange(e) {
    setFungiQuery(() => e.target.value);
  }
  function handleDelete(name) {
    setAddedMedicines((med) => med.filter((m) => m.name !== name));
    setAddMed(true);
  }
  function handleDeleteFungi(name) {
    setAddedFungiMedicines((med) => med.filter((m) => m.name !== name));
    setAddFungi(true);
  }
  function handleAddMed(med) {
    setAddedMedicines([...addedMedicines, med]);
    setAddMed(false);
    setSearchQuery("");
  }
  function handleAddSolution() {
    setSolution([...solution, sol]);
    setSol("");
  }
  function handleAddProblem() {
    setProblem([...problem, prb]);
    setPrb("");
  }
  function handleAddAnalysis() {
    setAnalysis([...analysis, anl]);
    setAnl("");
  }
  function handleAddFungi(med) {
    setAddedFungiMedicines([...addedFungiMedicines, med]);
    setAddFungi(false);
    setFungiQuery("");
  }
  console.log(solution);
  return (
    <>
      <MainHeader />
      <PrescriptionHeader
        setFarmerInfo={setFarmerInfo}
        farmerInfo={farmerInfo}
      />
      <div className="w-full md:w-5/6 m-auto">
        <div className="h-auto flex w-full m-auto">
          <div className="w-2/5 pr-2 sm:w-1/4 sm:border-r sm:border-r-emerald-700 sm:pr-4 sm:py-4)">
            <div className="text-start w-full">
              <h2 className="text-xl py-2 font-bold font-kalpurus text-green-700">
                সমস্যাঃ
              </h2>
              {problem.length > 0 && (
                <div className="text-emerald-700 font-kalpurus text-xl font font-lg">
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
              <div className="flex w-full gap-2 pt-2">
                <div className="w-[85%]">
                  <input
                    type="text"
                    name="problem"
                    id="problem"
                    value={prb}
                    onChange={(e) => setPrb(e.target.value)}
                    placeholder="সমস্যা"
                    className="font-kalpurus border border-gray-400 py-1.5 rounded-md pl-2 w-full"
                  />
                </div>
                <button
                  onClick={handleAddProblem}
                  className="text-white font-kalpurus font-thin px-1 sm:font-semibold sm:px-2 bg-emerald-700 rounded-md"
                >
                  যোগ+
                </button>
              </div>
            </div>
            <div className="text-start w-full pt-6">
              <h2 className="text-xl py-2 font-bold font-kalpurus text-green-700">
                Analysis:
              </h2>
              {analysis.length > 0 && (
                <div className="text-emerald-700 font-kalpurus text-xl font font-lg">
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
              <div className="flex w-full gap-2 pt-2">
                <div className="w-[85%]">
                  <input
                    type="text"
                    name="analysis"
                    id="analysis"
                    value={anl}
                    onChange={(e) => setAnl(e.target.value)}
                    placeholder="সমস্যা"
                    className="font-kalpurus border border-gray-400 py-1.5 rounded-md pl-2 w-full"
                  />
                </div>
                <button
                  onClick={handleAddAnalysis}
                  className="text-white font-kalpurus font-thin px-1 sm:font-semibold sm:px-2 bg-emerald-700 rounded-md"
                >
                  যোগ+
                </button>
              </div>
            </div>
            <div className="pt-8 font-kalpurus cursor-pointer">
              <div
                onClick={() => navigation("/")}
                className="bg-emerald-700 text-white rounded-md px-2 py-1.5 flex gap-2 text-xl font-bold justify-center items-center"
              >
                <IoHomeOutline />
                <p>হোম পেজ</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 sm:w-3/4 sm:py-4 sm:pl-8 sm:pr-4 ">
            <div className="sm:text-start sm:w-full">
              <h2 className="text-xl font-bold font-kalpurus text-green-700">
                পরামর্শ/করণীয়ঃ
              </h2>
              {solution.length > 0 && (
                <div className="text-emerald-700 font-kalpurus text-xl font font-lg">
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
              <div className="flex w-full gap-2 pt-2">
                <div className="w-[70%]">
                  <input
                    type="text"
                    name="solution"
                    id="solution"
                    value={sol}
                    onChange={(e) => setSol(e.target.value)}
                    placeholder="পরামর্শ/করণীয়"
                    className="font-kalpurus border border-gray-400 py-1.5 rounded-md pl-2 w-full"
                  />
                </div>
                <button
                  onClick={handleAddSolution}
                  className="text-white font-kalpurus font-thin px-1 sm:font-semibold sm:px-2 bg-emerald-700 rounded-md"
                >
                  যোগ+
                </button>
              </div>
            </div>
            <div className="py-2 font-kalpurus text-xl font-semibold text-emerald-700">
              <span>
                <input
                  type="text"
                  name="day"
                  value={dayToCome}
                  id="day"
                  className="font-kalpurus w-[50px] rounded-md border border-green-700 text-center"
                  onChange={(e) => setDayToCome(e.target.value)}
                />{" "}
                দিন পরে দেখা করুন
              </span>
            </div>
            <div className="sm:flex sm:justify-between sm:items-start)">
              <div className="w-full sm:w-1/2">
                <div className="pt-4 sm:pt-6">
                  <h2 className="underline text-xl py-2 font-bold font-kalpurus text-green-700">
                    বালাইনাশক ঔষধঃ
                  </h2>
                  {addedMedicines.length > 0 && (
                    <div className="text-emerald-700 font-kalpurus text-lg font-semibold">
                      {addedMedicines.map((med, index) => (
                        <div key={index} className=" flex gap-4 items-start">
                          <div>
                            <h1>
                              {index + 1}. {med.name}
                            </h1>
                            <h2 className="pl-6">
                              <span>Dose: </span>
                              {med.dose}
                            </h2>
                          </div>
                          <div
                            className="text-red-800 hover:text-red-500 cursor-pointer font-mono text-lg"
                            onClick={() => handleDelete(med.name)}
                          >
                            <IoMdCloseCircle />
                          </div>
                        </div>
                      ))}
                      <div className="flex gap-4">
                        <button
                          onClick={() => setAddMed((s) => !s)}
                          className="py-2 px-3 bg-emerald-700 text-white rounded-md mt-2"
                        >
                          {addMed ? "বন্ধ করুণ" : "নতুন ঔষধ যোগ +"}
                        </button>
                        <button
                          onClick={() => navigation("/preview")}
                          className="py-2 px-3 bg-emerald-700 text-white rounded-md mt-2"
                        >
                          প্রেসক্রিপশন দেখুন
                        </button>
                      </div>
                    </div>
                  )}
                  {addMed && (
                    <div className="flex flex-col w-max">
                      <div className="pt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={searchQuery}
                          onChange={handleSearchInputChange}
                          placeholder="ঔষধের নাম"
                          className="font-kalpurus border border-gray-400 py-1.5 rounded-md pl-2 w-[80%] sm:w-[300px]"
                        />
                      </div>
                      {searchedMedicines.length > 0 && searchQuery && (
                        <div className="border border-emerald-700/40 rounded-md font-kalpurus text-emerald-700 divide-emerald-700/40 divide-y cursor-pointer">
                          {searchedMedicines.map((med, index) => (
                            <h3
                              className="text-lg font-semibold rounded-md p-1 hover:bg-gray-200"
                              key={index}
                              onClick={() =>
                                handleAddMed({ name: med.name, dose: med.dose })
                              }
                            >
                              {med.name || med}
                            </h3>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="pt-4 sm:pt-6">
                  <h2 className="underline text-xl py-2 font-bold font-kalpurus text-green-700">
                    ছত্রাকনাশক ঔষধঃ
                  </h2>
                  {addedFungiMedicines.length > 0 && (
                    <div className="text-emerald-700 font-kalpurus text-lg font font-semibold">
                      {addedFungiMedicines.map((med, index) => (
                        <div key={index} className=" flex gap-4 items-start">
                          <div>
                            <h1>
                              {index + 1}. {med.name}
                            </h1>
                            <h2 className="pl-6">
                              <span>Dose: </span>
                              {med.dose}
                            </h2>
                          </div>
                          <div
                            className="text-red-800 hover:text-red-500 cursor-pointer font-mono text-lg"
                            onClick={() => handleDeleteFungi(med.name)}
                          >
                            <IoMdCloseCircle />
                          </div>
                        </div>
                      ))}
                      <div className="flex gap-4">
                        <button
                          onClick={() => setAddFungi((s) => !s)}
                          className="py-2 px-3 bg-emerald-700 text-white rounded-md mt-2"
                        >
                          {addFungi ? "বন্ধ করুণ" : "নতুন ঔষধ যোগ +"}
                        </button>
                        <button
                          onClick={() => navigation("/preview")}
                          className="py-2 px-3 bg-emerald-700 text-white rounded-md mt-2"
                        >
                          প্রেসক্রিপশন দেখুন
                        </button>
                      </div>
                    </div>
                  )}
                  {addFungi && (
                    <div className="flex flex-col w-max">
                      <div className="pt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={fungiQuery}
                          onChange={handleFungiInputChange}
                          placeholder="ঔষধের নাম"
                          className="font-kalpurus border border-gray-400 py-1.5 rounded-md pl-2 w-[80%] sm:w-[300px]"
                        />
                      </div>
                      {searchedFungiMedicines.length > 0 && fungiQuery && (
                        <div className="border border-emerald-700/40 rounded-md font-kalpurus text-emerald-700 divide-emerald-700/40 divide-y cursor-pointer">
                          {searchedFungiMedicines.map((med, index) => (
                            <h3
                              className="text-lg font-semibold rounded-md p-1 hover:bg-gray-200"
                              key={index}
                              onClick={() =>
                                handleAddFungi({
                                  name: med.name,
                                  dose: med.dose,
                                })
                              }
                            >
                              {med.name || med}
                            </h3>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WritePrescription;
