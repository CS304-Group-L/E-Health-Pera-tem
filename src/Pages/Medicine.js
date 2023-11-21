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
        path: "/HealthRecords"
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
        path: "/HealthRecords"
    }
];
const buttons = [
    {
        id: 1,
        name: "Give Medicine",
        bg_color: "bg-purple-600",
        img: add,
        path:"/GiveMedicine"
    },
    {
        id: 2,
        name: "View Past Medicine Records",
        bg_color: "bg-red-400",
        img: searchs
    }

];

function Medicines() {

    return (
        <div>

            <div className="w-full">
                <div className="flex justify-center">
                    <div className="grid w-1/2 grid-cols-4 gap-0 mt-1 grid-rows-1">
                        {topButtons.map((item => (
                            <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'Medicine' ? `bg-gray-200 text-red-500 underline` : item.bg_color} hover:bg-gray-200`}>
                                <div className="flex justify-center text-end"></div>
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </button>
                        ))

                        )}
                    </div>
                </div>
            </div>
            <div>
                <Link to="/DoctorBoard">
                    Home
                </Link>
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

export default Medicines;