import React from "react";
import medicine from "../Assets/medical.png";
import add from "../Assets/add.png";
import searchs from "../Assets/search.png";
import home from "../Assets/home.png"

import { Link } from "react-router-dom";

const topButtons = [
    {
        id: 1,
        name: "Health Records",
        bg_color: "bg-green-600",
        path: "/HealthRecords"
    },
    {
        id: 2,
        name: "Medical Report",
        bg_color: "bg-blue-500",
        path: "/MedicalReport"
    },
    {
        id: 3,
        name: "Medicine",
        bg_color: "bg-purple-600",
        path: "/Medicines"
    },
    {
        id: 4,
        name: "Laboratary Test",
        bg_color: "bg-yellow-300",
        path: "/LabReport"
    }
];
const buttons = [
    {
        id: 1,
        name: "Add Medical",
        bg_color: "bg-blue-500",
        img: add,
        path:"/CreateMedical"
    },
    {
        id: 2,
        name: "View Past Medical Records",
        bg_color: "bg-red-400",
        img: searchs
    }

];

function MedicalReport() {

    return (
        <div>

                <div className="flex justify-center">
                    <div className="grid w-full grid-cols-4 gap-0 mt-1 grid-rows-1">
                        {topButtons.map((item => (
                            <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'Medical Report' ? `bg-gray-200  underline` : item.bg_color} hover:bg-gray-200`}>
                                <div className="flex justify-center text-end">
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                                </div>
                                
                            </button>
                        ))

                        )}
                </div>
            </div>
            <div>
            <Link to="/DoctorBoard"><img className="w-12 m-5 ml-5 " src={home} alt='Doctor-Home'/></Link>
            </div>
            <div className="flex justify-center">
                <div className="grid w-1/2 grid-cols-2 gap-10 mt-20 grid-rows-1">
                    {buttons.map((item) => (
                        <button key={item.id} className={`flex flex-col items-center p-5 ${item.bg_color} hover:bg-gray-200`}>
                            <img
                                className="justify-center  h-32"
                                src={item.img}
                                alt="icon"
                            />
                            <div className="flex justify-center text-end"></div>
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MedicalReport;