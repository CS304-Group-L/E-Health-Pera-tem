import React from "react";
import { Link } from "react-router-dom";

const topButtons = [
  {
      id: 1,
      name: "Add Drugs",
      bg_color: "bg-green-600",
      path: "../DrugStore.js"
  },
  {
      id: 2,
      name: "Update Drugs",
      bg_color: "bg-blue-500",
      path: "../DrugStore.js"
  },
  {
      id: 3,
      name: "Delete Drugs",
      bg_color: "bg-purple-600",
      path: "../DrugStore.js"
  },
  {
      id: 4,
      name: "View Drugs",
      bg_color: "bg-yellow-300",
      path: "../DrugStore.js"
  }
];

function AddDrugs() {
    return (
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
    );

}


export default AddDrugs;

