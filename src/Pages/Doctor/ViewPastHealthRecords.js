import React from "react";

import { Link } from "react-router-dom";

const topButtons = [
    {
        id: 1,
        name: "Add Health Record",
        bg_color: "bg-green-600",
        path: "/AddHealthRecord"
    },
    {
        id: 2,
        name: "View Past Health Records",
        bg_color: "bg-red-400",
        path: "/ViewPastHealthRecordsSearch"
    }];

function ViewPastHealthRecords(){
    return(
        <div>
            <div className="flex justify-center">
                <div className="grid w-full grid-cols-2 gap-0 mt-1 grid-rows-1">
                    {topButtons.map((item => (
                        <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'View Past Health Records' ? `bg-gray-200  underline` : item.bg_color} hover:bg-gray-200`}>
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
        </div>
    );
}

export default ViewPastHealthRecords;