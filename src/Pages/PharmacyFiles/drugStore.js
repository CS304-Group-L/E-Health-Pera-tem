import React from "react";
import add from "../../Assets/add.png";
import view from "../../Assets/view.png";
import deelete from "../../Assets/delete.png";
import update from "../../Assets/update.png";
import exit from "../../Assets/exit.png";
import { Link } from "react-router-dom";

/*const topButtons = [
  {
    id: 1,
    name: "Drug Store",
    bg_color: "bg-green-600",
    path: "/Pharmacy",
  },
  {
    id: 2,
    name: "Drug Issueing",
    bg_color: "bg-blue-500",
    path: "/Pharmacy",
  },
];*/

const options = [
  {
    id: 1,
    name: "ADD DRUGS",
    bg_color: "bg-yellow-300",
    img: add,
    path: "/AddDrugs",
  },
  {
    id: 2,
    name: "VIEW DRUGS",
    bg_color: "bg-blue-500",
    img: view,
    path: "/ViewDrugs",
  },
  {
    id: 3,
    name: "UPDATE DRUGS",
    bg_color: "bg-purple-600",
    img: update,
    path: "/UpdateDrugs",
  },
  {
    id: 4,
    name: "DELETE DRUGS",
    bg_color: "bg-green-300",
    img: deelete,
    path: "/DeleteDrugs",
  },
  {
    id: 5,
    name: "EXIT",
    bg_color: "bg-red-500",
    img: exit,
    path: "/Pharmacy",
  },
];

function DrugStore() {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="grid w-1/2 grid-cols-3 gap-10 mt-20 ">
          {options.map((item) => (
            <Link to={item.path}>
              <button
                key={item.id}
                className={`flex flex-col items-center p-5 ${item.bg_color} hover:bg-gray-200`}
              >
                <img
                  className="justify-center  h-32"
                  src={item.img}
                  alt="icon"
                />
                <div className="flex justify-center text-end"></div>
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrugStore;
