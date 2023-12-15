import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HealthForm from "./Pages/Healthform";
import Personinfo from "./Pages/Personinfo";
import Services from "./Pages/Services";
import Contactus from "./Pages/Home/Contactus";
import Aboutus from "./Pages/Home/About";
import Pharmacy from "./Pages/Pharmacy";
import DoctorBoard from "./Pages/Doctor/DoctorHome";
import Medicines from "./Pages/Doctor/Medicine";
import HealthRecords from "./Pages/Doctor/HealthRecord";
import GiveMedicine from "./Pages/Doctor/GiveMedicine";
import MedicalReport from "./Pages/Doctor/MedicalReport";
import LabReport from "./Pages/Doctor/LabReport";
import AddHealthRecord from "./Pages/Doctor/AddHealthRecord";
import ViewPastHealthRecordsSearch from "./Pages/Doctor/ViewPastHealthRecordsSearch";
import ViewPastHealthRecords from "./Pages/Doctor/ViewPastHealthRecords";
import ViewPastMedicineRecordsSearch from "./Pages/Doctor/ViewPastMedicineRecordsSearch";
import ViewPastMedicineRecords from "./Pages/Doctor/ViewPastMedicineRecords";
import IssueLaboratoryTest from "./Pages/DoctorLabPages/IssueLaboratoryTest";
import CreateMedical from "./Pages/Doctor/CreateMedical";
import IssueLaboratoryTestNew from "./Pages/Doctor/IssueLaboratoryTestNew";
import Laboratory from "./Pages/Laboratory/Laboratory_Home";
import DraftedLabReport from "./Pages/Laboratory/DraftedLabReport";
import NewLabReportrequest from "./Pages/Laboratory/NewLabReportRequest";
import SubmittedLabReport from "./Pages/Laboratory/SubmittedLabReport";
import AllLabReports from "./Pages/Laboratory/AllLabReports";
import ASOT_Report from "./Pages/LabReports/ASOT_Report";
import BloodGroup from "./Pages/LabReports/BooldGroup";
import Covid19RapidAntigen from "./Pages/LabReports/Covid19RapidAntigen";
import CRP_Report from "./Pages/LabReports/CRP.js";
import CT_BT_Report from "./Pages/LabReports/CT_BT.js";


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

  {path : "/CreateMedical",element : <CreateMedical/>},

  {path : "/IssueLaboratoryTestNew" , element : <IssueLaboratoryTestNew/>},

  {path: "/Laboratory" ,element : <Laboratory/>},

  {path: "/DraftedLabReport", element: <DraftedLabReport/>},

  {path: "/NewLabReportrequest",element: <NewLabReportrequest/>},

  {path: "/SubmittedLabReport", element: <SubmittedLabReport/>},

  {path : "/AllLabReports",element: <AllLabReports/>},

  {path: "/ASOT_Report" ,element: <ASOT_Report/>},

  {path:"/BloodGroup",element: <BloodGroup/>},

  {path: "/Covid19RapidAntigen",element: <Covid19RapidAntigen/>},

  {path : "/CRP_Report",element: <CRP_Report/>},

  {path : "CT_BT_Report", element: <CT_BT_Report/>}

]);

export default function App() {
  return <RouterProvider router={router} />;
}
