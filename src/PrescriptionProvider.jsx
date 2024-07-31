import { createContext, useContext } from "react";
import { useState } from "react";

const PrescriptionContext = createContext();
function PrescriptionProvider({ children }) {
  const [addedMedicines, setAddedMedicines] = useState([]);
  const [dayToCome, setDayToCome] = useState("");
  const [addedFungiMedicines, setAddedFungiMedicines] = useState([]);
  const [problem, setProblem] = useState([]);
  const [analysis, setAnalysis] = useState([]);
  const [solution, setSolution] = useState([]);
  const [farmerInfo, setFarmerInfo] = useState({
    name: "",
    cropName: "",
    address: "",
    phone: "",
  });

  return (
    <PrescriptionContext.Provider
      value={{
        addedMedicines,
        addedFungiMedicines,
        setAddedMedicines,
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
      }}
    >
      {children}
    </PrescriptionContext.Provider>
  );
}
function usePrescription() {
  const context = useContext(PrescriptionContext);
  return context;
}
export { PrescriptionProvider, usePrescription };
