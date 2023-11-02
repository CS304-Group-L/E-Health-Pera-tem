import React from "react";
import Navbar from "../components/Navbar";
import medicalRecord from "../Assets/medical_record.png";

const options = [
  {
    id: 1,
    name: "Health Record",
    bg_color: "bg-green-600",
    img: medicalRecord,
  },
  {
    id: 2,
    name: "Medical Report",
    bg_color: "bg-blue-500",
    img: medicalRecord,
  },
  { id: 3, name: "Medicine", bg_color: "bg-yellow-500", img: medicalRecord },
  {
    id: 4,
    name: "Laboratary Test",
    bg_color: "bg-purple-600",
    img: medicalRecord,
  },
];

function DoctorBoard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
    <div className = "flex justify-center">
      <div className="grid w-1/2 grid-cols-2 gap-10 mt-20 ">
        {options.map((item) => (
          <button key={item.id} className={`flex flex-col items-center p-5 ${item.bg_color}`}>
            <img
              className="justify-center  h-32"
              src={item.img}
              alt="icon"
            />
            <div className="flex justify-center text-end">{item.name}</div>
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}

export default DoctorBoard;
