import React from "react";
import home from "../Assets/home.png"
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
        path: "/ViewPastMedicineRecordsSearch"
    }
];

function GiveMedicine(){
    return(<div>
        
                <div className="flex justify">
                    <div className="grid w-full grid-cols-2 gap-0 mt-0 grid-rows-1">
                        {topButtons.map((item => (
                            <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'Give Medicine' ? `bg-gray-200 underline` : item.bg_color} hover:bg-gray-200`}>
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
            <div><Link to="/DoctorBoard"><img className="w-12 m-5 ml-5 " src={home} alt='Doctor-Home'/></Link></div>

            <div>
                
            </div>
    </div>

    );
}

export default GiveMedicine;