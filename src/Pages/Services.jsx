import React from "react";
import image from "../Assets/Photo2.jpg";
import { Link } from "react-router-dom";
const buttons = [
  {id: 1, name: "Student", path: "/StudentLogin"},
  {id: 2, name: "Staff", path: "/StaffLogin"},
  {id: 3, name: "Doctor", path: "/DoctorLogin"},
  {id: 4, name: "Pharmacy", path: "/PharmacyLogin"},
  {id: 5, name: "Laboratary", path: "/LabLogin" },
  {id: 6, name: "Ward", path: "/WardLogin"},
  {id: 7, name: "Nurse", path: "/NurseLogin"},
]
function Services() {
  return (
    <div className="flex flex-col h-screen">
      

      <div className="p-4 mb-6 text-2xl font-bold text-center bg-gray-100">
        <div>Health Center - University of Peradeniya</div>
        <div className="text-base font-normal">SERVICES </div>
      </div>

      <div className="mt-0">
        <div className="min-h-full pt-1 flex items-center justify-center h-[51vh]">
          <div className="flex flex-wrap justify-center pt-5 space-x-2">
            {buttons.map((item) =>(
              <button key={item.id} className="px-4 py-2 font-bold text-black bg-red-800 rounded hover:bg-yellow-300">
              <Link to={item.path}>{item.name}</Link>
              </button>
            ))
              
            }
          </div>
        </div>
      </div>

     
    </div>
  );
}
export default Services;
