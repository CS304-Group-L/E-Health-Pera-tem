import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup.js";
import StudentSignUp from "./Pages/StudentSignup.js";
import StaffSignUp from "./Pages/StaffSignup.js";
import ForgotPassword from "./Pages/ForgotPassword.js";
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
import DoctorHome from "./Pages/Doctor/DoctorHome";
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
import LaboratoryHome from "./Pages/Laboratory/LaboratoryHome.js";
import DraftedLabReport from "./Pages/Laboratory/DraftedLabReport";
import NewLabReportrequest from "./Pages/Laboratory/NewLabReportRequest";
import SubmittedLabReport from "./Pages/Laboratory/SubmittedLabReport";
import AllLabReports from "./Pages/Laboratory/AllLabReports";
import ASOT_Report from "./Pages/LabReports/ASOT_Report";
import BloodGroup from "./Pages/LabReports/BooldGroup";
import Ppbs_Report from "./Pages/LabReports/Ppbs_Report.js";
import TotalProtein_Report from "./Pages/LabReports/TotalProtein_Report.js";
import Creatinine_Report from "./Pages/LabReports/Creatinine_Report.js";
import Covid19RapidAntigen from "./Pages/LabReports/Covid19RapidAntigen";
import CRP_Report from "./Pages/LabReports/CRP.js";
import CT_BT_Report from "./Pages/LabReports/CT_BT.js";
import Dengue from "./Pages/LabReports/Dengue.js";
import GGT from "./Pages/LabReports/GGT.js";
import ESR_Report from "./Pages/LabReports/ESR.js";
import Hcg_test from "./Pages/LabReports/hcg_test.js";
import Hep_B from "./Pages/LabReports/Hep_B.js";
import VDRL from "./Pages/LabReports/VDRL.js";
import RH_Factor from "./Pages/LabReports/RH_Factor.js";
import Urine_Protein from "./Pages/LabReports/Urine_Protein.js";
import Liver_Profile_New from "./Pages/LabReports/Liver_Profile_New.js";
import UFR from "./Pages/LabReports/UFR.js";

import PharmacyHome from "./Pages/PharmacyFiles/PharmacyHome.js";
import DrugStore from "./Pages/PharmacyFiles/drugStore.js";
import AddDrugs from "./Pages/PharmacyFiles/AddDrugs";
import DeleteDrugs from "./Pages/PharmacyFiles/DeleteDrugs";
import DeleteDrugs1 from "./Pages/PharmacyFiles/DeleteDrugs1";
import UpdateDrugs from "./Pages/PharmacyFiles/UpdateDrugs";
import UpdateDrugs1 from "./Pages/PharmacyFiles/UpdateDrugs1";
import ViewDrugs from "./Pages/PharmacyFiles/ViewDrugs";
import DrugIssueing from "./Pages/PharmacyFiles/DrugIssueing.js";
import RootLayout from "./layouts/RootLayout.js";

import NurseHome from "./Pages/Nurse/NurseHome.js";
import StudentNumber from "./Pages/Nurse/StudentNumber.js";
import WardFrom from "./Pages/Nurse/WardForm.js";
import TemperatureForm from "./Pages/Nurse/TemperatureForm.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/StudentLogin", element: <Login role="Student" /> },
      { path: "/StaffLogin", element: <Login role="Staff" /> },
      { path: "/DoctorLogin", element: <Login role="Doctor" /> },
      { path: "/PharmacyLogin", element: <Login role="Pharmacy" /> },
      { path: "/LabLogin", element: <Login role="Laboratory" /> },
      { path: "/WardLogin", element: <Login role="Ward" /> },
      { path: "/NurseLogin", element: <Login role="Nurse" /> },

      { path: "/Signup", element: <Signup /> },
      { path: "/ForgotPassword", element: <ForgotPassword /> },

      { path: "/StudentNumberWard", element: <StudentNumber role="Ward" /> },
      {
        path: "/StudentNumberTemperature",
        element: <StudentNumber role="Temperature" />,
      },
      {
        path: "/StudentNumberIntakeOutPutChart",
        element: <StudentNumber role="IntakeOutPutChart" />,
      },
      { path: "/StudentNumberDurg", element: <StudentNumber role="Durg" /> },
      {
        path: "/StudentNumberFullBloodCount",
        element: <StudentNumber role="FullBloodCount" />,
      },
      { path: "/StudentNumber", element: <StudentNumber role="ward" /> },
      { path: "/StudentNumber", element: <StudentNumber role="nurse" /> },

      { path: "/StudentSignup", element: <StudentSignUp /> },

      { path: "/StaffSignup", element: <StaffSignUp /> },

      

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

      { path: "/PharmacyHome", element: <PharmacyHome /> },

      { path: "/DoctorHome", element: <DoctorHome /> },

      { path: "/Medicines", element: <Medicines /> },

      { path: "/HealthRecords", element: <HealthRecords /> },

      { path: "/DrugStore", element: <DrugStore /> },

      { path: "/GiveMedicine", element: <GiveMedicine /> },

      { path: "/AddDrugs", element: <AddDrugs /> },

      { path: "/DeleteDrugs", element: <DeleteDrugs /> },

      { path: "/DeleteDrugs1", element: <DeleteDrugs1 /> },

      { path: "/ViewDrugs", element: <ViewDrugs /> },

      { path: "/UpdateDrugs", element: <UpdateDrugs /> },

      { path: "/UpdateDrugs1", element: <UpdateDrugs1 /> },

      { path: "/DrugIssueing", element: <DrugIssueing /> },

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

      {
        path: "/ViewPastMedicineRecords",
        element: <ViewPastMedicineRecords />,
      },

      { path: "/IssueLaboratoryTest", element: <IssueLaboratoryTest /> },

      { path: "/CreateMedical", element: <CreateMedical /> },

      { path: "/IssueLaboratoryTestNew", element: <IssueLaboratoryTestNew /> },

      { path: "/LaboratoryHome", element: <LaboratoryHome /> },

      { path: "/DraftedLabReport", element: <DraftedLabReport /> },

      { path: "/NewLabReportrequest", element: <NewLabReportrequest /> },

      { path: "/SubmittedLabReport", element: <SubmittedLabReport /> },

      { path: "/AllLabReports", element: <AllLabReports /> },

      { path: "/NurseHome", element: <NurseHome /> },

      { path: "/WardForm", element: <WardFrom /> },

      { path: "/TemperatureForm", element: <TemperatureForm /> },
    ],
  },

  { path: "/ASOT_Report", element: <ASOT_Report /> },

  { path: "/BloodGroup", element: <BloodGroup /> },

  { path: "Ppbs_Report", element: <Ppbs_Report /> },

  { path: "/Covid19RapidAntigen", element: <Covid19RapidAntigen /> },

  { path: "/CRP_Report", element: <CRP_Report /> },

  { path: "/CT_BT_Report", element: <CT_BT_Report /> },

  { path: "/Dengue", element: <Dengue /> },

  {  path: "GGT", element: <GGT /> },

  { path: "/ESR_Report", element: <ESR_Report /> },

  { path: "/Hcg_test", element: <Hcg_test /> },

  { path: "/Hep_B", element: <Hep_B /> },

  { path: "/VDRL", element: <VDRL /> },

  { path: "/RH_Factor", element: <RH_Factor /> },
  
  { path: "/TotalProtein_Report", element: <TotalProtein_Report /> },

  {  path: "/Creatinine_Report", element: <Creatinine_Report /> },

  { path: "/Urine_Protein", element: <Urine_Protein /> },

  { path: "/Liver_Profile_New", element: <Liver_Profile_New /> },

  { path: "/UFR", element: <UFR /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
