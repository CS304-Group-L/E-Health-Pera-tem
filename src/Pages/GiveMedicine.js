import React from "react";
import { Link } from "react-router-dom";

const topButtons = [
    {
        id: 1,
        name: "Give Medicine",
        bg_color: "bg-purple-600",
        path: "/GiveMedicine"
    },
    {
        id: 2,
        name: "View Medicine Details",
        bg_color: "bg-red-400",
        path: "/HealthRecords"
    }
];

function GiveMedicine(){
    return(<div>
        <div className="w-full">
                <div className="flex justify-center">
                    <div className="grid  grid-cols-4 gap-0 mt-1 grid-rows-1">
                        {topButtons.map((item => (
                            <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'Give Medicine' ? `bg-gray-200 text-red-500 underline` : item.bg_color} hover:bg-gray-200`}>
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
            <div></div>
    </div>

    );
}

export default GiveMedicine;