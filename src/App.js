import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HealthForm from "./Pages/Healthform";
import Personinfo from "./Pages/Personinfo";
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/About";
import Pharmacy from "./Pages/Pharmacy";
import DoctorBoard from "./Pages/DoctorHome";
import Medicines from "./Pages/Medicine";
import HealthRecords from "./Pages/HealthRecord";
import GiveMedicine from "./Pages/GiveMedicine";
import MedicalReport from "./Pages/MedicalReport";
import LabReport from "./Pages/LabReport";
import AddHealthRecord from "./Pages/AddHealthRecord";
import ViewPastHealthRecordsSearch from "./Pages/ViewPastHealthRecordsSearch";
import ViewPastHealthRecords from "./Pages/ViewPastHealthRecords";
import ViewPastMedicineRecordsSearch from "./Pages/ViewPastMedicineRecordsSearch";
import ViewPastMedicineRecords from "./Pages/ViewPastMedicineRecords";
import IssueLaboratoryTest from "./Pages/IssueLaboratoryTest";
import CreateMedical from "./Pages/CreateMedical";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  { path: "/Login", element: <Login /> },

  { path: "/Healthform", element: <HealthForm /> },

  { path: "/Personinfo", element: <Personinfo /> },

  { path: "/Services", element: <Services /> },

  { path: "/Contactus", element: <Contactus /> },

  { path: "/About", element: <Aboutus /> },

  { path: "/Pharmacy", element: <Pharmacy /> },

  { path: "/DoctorBoard", element: <DoctorBoard /> },

  { path : "/Medicines" , element: <Medicines/>},

  { path : "/HealthRecords" , element: <HealthRecords/>},

  { path : "/GiveMedicine" , element: <GiveMedicine/>},

  {path : "/MedicalReport" , element: <MedicalReport/>},

  {path : "/LabReport" ,element : <LabReport/>},

  {path : "AddHealthRecord", element : <AddHealthRecord/>},

  {path : "/ViewPastHealthRecordsSearch",element : <ViewPastHealthRecordsSearch/>},

  {path : "/ViewPastHealthRecords", element : <ViewPastHealthRecords/>},

  {path : "/ViewPastMedicineRecordsSearch" , element : <ViewPastMedicineRecordsSearch/>},

  {path : "/ViewPastMedicineRecords" , element : <ViewPastMedicineRecords/>},

  {path : "/IssueLaboratoryTest" , element : <IssueLaboratoryTest/>},

  {path : "/CreateMedical",element : <CreateMedical/>}
]);

export default function App() {
  return <RouterProvider router={router} />;
}
