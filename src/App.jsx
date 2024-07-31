import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./Home";
import AddMedicine from "./AddMedicine";
import WritePrescription from "./WritePrescription";
import Preview from "./Preview";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PrescriptionProvider } from "./PrescriptionProvider";
import UpdateMedicine from "./UpdateMedicine";
import EditMedicineLayout from "./EditMedicineLayout";
import EditFungiMedicineLayout from "./EditFungiMedicineLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <AddMedicine />,
    path: "/add-medicine",
  },
  {
    element: <WritePrescription />,
    path: "/prescription",
  },
  {
    element: <UpdateMedicine />,
    path: "/update",
  },
  {
    element: <EditMedicineLayout />,
    path: "/update_general_medicine",
  },
  {
    element: <EditFungiMedicineLayout />,
    path: "/update_fungi_medicine",
  },
  {
    element: <Preview />,
    path: "/preview",
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <PrescriptionProvider>
        <RouterProvider router={router} />
      </PrescriptionProvider>
    </QueryClientProvider>
  );
}

export default App;
