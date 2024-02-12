import React from "react";
import image from "../Assets/Photo2.jpg";
import { Link } from "react-router-dom";

const buttons = [
  
  {id: 1, name: "Doctor", path: "/DoctorLogin"},
  {id: 2, name: "Pharmacy", path: "/PharmacyLogin"},
  {id: 3, name: "Laboratary", path: "/LabLogin" },
  {id: 4, name: "Nurse", path: "/NurseLogin"},
  {id: 5, name: "Student", path: "/StudentLogin"}
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
              <Link to={{ pathname: item.path, state: { role: item.name } }}>{item.name}</Link>
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
