import React from "react";
import add from "../../Assets/add.png";
import searchs from "../../Assets/search.png";
import home from '../../Assets/home.png';
import medicalRecord from "../../Assets/medical_record.png";
import medicine from "../../Assets/medicine_icon.png";
import lab from "../../Assets/lab icon.png";
import medical from "../../Assets/medical.png";

import { Link } from "react-router-dom";

const topButtons = [
    {
        id: 1,
        name: "Health Records",
        bg_color: "bg-green-600",
        img: medicalRecord,
        path: "/HealthRecords"
    },
    {
        id: 2,
        name: "Medical Report",
        bg_color: "bg-blue-500",
        img: medical,
        path: "/MedicalReport"
    },
    {
        id: 3,
        name: "Medicine",
        bg_color: "bg-purple-600",
        img: medicine,
        path: "/Medicines"
    },
    {
        id: 4,
        name: "Laboratary Test",
        bg_color: "bg-yellow-300",
        img: lab,
        path: "/LabReport"
    },
    {
        id: 5,
        name: "Home",
        bg_color: "bg-white-300",
        img: home,
        path: "/DoctorBoard"
    }
];
const buttons = [
    {
        id: 1,
        name: "Add Medical",
        bg_color: "bg-blue-500",
        img: add,
        path: "/CreateMedical"
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
                <div className="flex justify-center w-full grid-cols-4 gap-10 mt-0 grid-rows-1">
                    {topButtons.map((item => (

                        <button key={item.id} className={`flex flex-col object-cover h-20 w-20 items-center p-4 m-5 rounded-full ${item.name === 'View Past Health Records' ? `bg-gray-200  underline` : item.bg_color} hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
                        >
                            <div className="flex justify-center">
                                <Link to={item.path}>

                                    <img
                                        className="justify-center"
                                        src={item.img}
                                    />
                                </Link>
                            </div>

                        </button>
                    ))

                    )}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid w-1/2 grid-cols-2 gap-10 mt-20 grid-rows-1">
                    {buttons.map((item) => (
                        <button key={item.id} className={`flex flex-col items-center p-5 ${item.bg_color} hover:shadow-lg transform hover:scale-110 transition-all duration-300`}>
                            <Link to={item.path}>
            <img
              className="justify-center  h-32"
              src={item.img}
              alt="icon"
            />
            </Link> 
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