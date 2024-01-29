import React from "react";
import intake from "../../Assets/intake out put.png"
import bloodcell from "../../Assets/blood cell nurse.png"
import temperature from "../../Assets/temperature.png"
import medicine from "../../Assets/medicine nurse.png"
import ward from "../../Assets/ward.png"
import exit from "../../Assets/exit nurse.png"
import { Link } from "react-router-dom";

const options = [
    {
      id: 1,
      name: "Ward Forms",
      bg_color: "bg-blue-500",
      img:  ward,
      path:"/StudentNumberWard"
    },
    {
      id: 2,
      name: "Temperature Chart",
      bg_color: "bg-yellow-300",
      img: temperature,
      path:"/StudentNumberTemperature"
    },
    { id: 3, 
      name: "Intake Out Put Chart", 
      bg_color: "bg-green-400", 
      img:intake,
      path:"/StudentNumberIntakeOutPutChart" 
    },
    {
      id: 4,
      name: "Drug Chart",
      bg_color: "bg-purple-400",
      img: medicine,
      path:"/StudentNumberDurg"
    },
    {
        id: 5,
        name: "Full Blood Count Chart",
        bg_color: "bg-red-400",
        img: bloodcell,
        path:"/StudentNumberFullBloodCount"
      },
      {
        id: 6,
        name: "Exit",
        bg_color: "bg-blue-100",
        img: exit,
        path:"/AllLabReports"
      },
  ];

  function NurseHome() {
    return (
      <div>
      <div className = "flex justify-center">
        <div className="grid w-1/2 grid-cols-3 gap-10 mt-20 ">
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
  
  export default NurseHome;
  