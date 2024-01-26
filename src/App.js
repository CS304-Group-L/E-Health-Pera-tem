import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HealthForm from "./Pages/Healthform";
import Personinfo from "./Pages/Personinfo";
import Services from "./Pages/Services";
import Contactus from "./Pages/Home/Contactus";
import Notices from "./Pages/Home/Notices";
import Update from "./Pages/Home/Update";
import Article from "./Pages/Home/Article";
import Other from "./Pages/Home/Other";
import Events from "./Pages/Home/Events";
import News_page from "./Pages/Home/News_page";
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
import Dengue from "./Pages/LabReports/Dengue.js";
import ESR_Report from "./Pages/LabReports/ESR.js";
import Hcg_test from "./Pages/LabReports/hcg_test.js";
import Hep_B from "./Pages/LabReports/Hep_B.js";
import VDRL from "./Pages/LabReports/VDRL.js";

import DrugStore from "./Pages/drugStore";
import AddDrugs from "./Pages/PharmacyFiles/AddDrugs";
import DeleteDrugs from "./Pages/PharmacyFiles/DeleteDrugs";
import DeleteDrugs1 from "./Pages/PharmacyFiles/DeleteDrugs1";
import UpdateDrugs from "./Pages/PharmacyFiles/UpdateDrugs";
import UpdateDrugs1 from "./Pages/PharmacyFiles/UpdateDrugs1";
import ViewDrugs from "./Pages/PharmacyFiles/ViewDrugs";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/Login", element: <Login /> },
  
  { path: "/Signup", element: <Signup /> },

  { path: "/Healthform", element: <HealthForm /> },

  { path: "/Personinfo", element: <Personinfo /> },

  { path: "/Services", element: <Services /> },

  { path: "/Contactus", element: <Contactus /> },

  { path: "/Notices", element: <Notices /> },

  { path: "/Events", element: <Events /> },

  { path: "/Other", element: <Other /> },

  { path: "/Article", element: <Article /> },

  { path: "/News_page", element: <News_page /> },

  { path: "/Update", element: <Update /> },

  { path: "/About", element: <Aboutus /> },

  { path: "/Pharmacy", element: <Pharmacy /> },

  { path: "/DoctorBoard", element: <DoctorBoard /> },

  { path: "/Medicines", element: <Medicines /> },

  { path: "/HealthRecords", element: <HealthRecords /> },

  { path: "/DrugStore", element: <DrugStore /> },

  { path: "/GiveMedicine", element: <GiveMedicine /> },

  { path: "/PharmacyFile/AddDrugs", element: <AddDrugs /> },

  { path: "/PharmacyFile/DeleteDrugs", element: <DeleteDrugs /> },

  { path: "/PharmacyFile/DeleteDrugs1", element: <DeleteDrugs1 /> },

  { path: "/PharmacyFile/ViewDrugs", element: <ViewDrugs /> },

  { path: "/PharmacyFile/UpdateDrugs", element: <UpdateDrugs /> },

  { path: "/PharmacyFile/UpdateDrugs1", element: <UpdateDrugs1 /> },

  { path: "/GiveMedicine", element: <GiveMedicine /> },

  { path: "/MedicalReport", element: <MedicalReport /> },

  { path: "/LabReport", element: <LabReport /> },

  { path: "AddHealthRecord", element: <AddHealthRecord /> },

  {
    path: "/ViewPastHealthRecordsSearch",
    element: <ViewPastHealthRecordsSearch />,
  },

  { path: "/ViewPastHealthRecords", element: <ViewPastHealthRecords /> },

  {
    path: "/ViewPastMedicineRecordsSearch",
    element: <ViewPastMedicineRecordsSearch />,
  },

  { path: "/ViewPastMedicineRecords", element: <ViewPastMedicineRecords /> },

  { path: "/IssueLaboratoryTest", element: <IssueLaboratoryTest /> },

  { path: "/CreateMedical", element: <CreateMedical /> },

  { path: "/IssueLaboratoryTestNew", element: <IssueLaboratoryTestNew /> },

  { path: "/Laboratory", element: <Laboratory /> },

  { path: "/DraftedLabReport", element: <DraftedLabReport /> },

  { path: "/NewLabReportrequest", element: <NewLabReportrequest /> },

  { path: "/SubmittedLabReport", element: <SubmittedLabReport /> },

  { path: "/AllLabReports", element: <AllLabReports /> },

  { path: "/ASOT_Report", element: <ASOT_Report /> },

  { path: "/BloodGroup", element: <BloodGroup /> },

  { path: "/Covid19RapidAntigen", element: <Covid19RapidAntigen /> },

  { path: "/CRP_Report", element: <CRP_Report /> },

  { path: "/CT_BT_Report", element: <CT_BT_Report /> },

  { path: "/Dengue", element: <Dengue /> },

  { path: "/ESR_Report", element: <ESR_Report /> },

  { path: "/Hcg_test", element: <Hcg_test /> },

  { path: "/Hep_B", element: <Hep_B /> },

  { path: "/VDRL", element: <VDRL /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
