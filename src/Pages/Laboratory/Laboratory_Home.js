import React from "react";
import newLabTest from "../../Assets/new_lab_test.png";
import draftLabTest from "../../Assets/draft_lab_test.png";
import submitedLabTest from "../../Assets/submit_lab_test.png";
import allLabTest from "../../Assets/all_lab_reports.png"
import { Link } from "react-router-dom";

const options = [
  {
    id: 1,
    name: "New Lab Report Request",
    bg_color: "bg-green-500",
    img: newLabTest,
    path:""
  },
  {
    id: 2,
    name: "Drafted Lab Reports",
    bg_color: "bg-red-300",
    img: draftLabTest,
    path:""
  },
  { id: 3, 
    name: "Submitted Lab Reports", 
    bg_color: "bg-blue-300", 
    img: submitedLabTest,
    path:"" 
  },
  {
    id: 4,
    name: "All Lab Report Types",
    bg_color: "bg-purple-300",
    img: allLabTest,
    path:""
  },
];


function Laboratory() {
  return (
    <div>
    <div className = "flex justify-center">
      <div className="grid w-1/2 grid-cols-2 gap-10 mt-20 ">
        {options.map((item) => (
          <button key={item.id} className={`flex flex-col items-center p-5 ${item.bg_color} hover:shadow-lg transform hover:scale-110 transition-all duration-300`}>
            <Link to={item.path}>
            <img
              className="justify-center  h-32"
              src={item.img}
              alt="icon"
            />
            </Link> 
            <div className="flex justify-center text-end">
            
              {item.name}
              
            </div>
            
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Laboratory;
