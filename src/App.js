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
  
  { path : "/GiveMedicine" , element: <GiveMedicine/>}
]);

export default function App() {
  return <RouterProvider router={router} />;
}
