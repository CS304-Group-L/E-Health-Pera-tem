import React from "react";

import { Link } from "react-router-dom";
import home from "../../Assets/home.png";
import add from "../../Assets/add.png";
import view from "../../Assets/view.png";
import deelete from "../../Assets/delete.png";
import update from "../../Assets/update.png";

const topButtons = [
  {
    id: 1,
    name: "Add Drugs",
    bg_color: "bg-green-600",
    img: add,
    path: "/AddDrugs",
  },
  {
    id: 2,
    name: "Update Drugs",
    bg_color: "bg-blue-500",
    img: update,
    path: "/UpdateDrugs",
  },
  {
    id: 3,
    name: "Delete Drugs",
    bg_color: "bg-purple-600",
    img: deelete,
    path: "/DeleteDrugs",
  },
  {
    id: 4,
    name: "View Drugs",
    bg_color: "bg-yellow-300",
    img: view,
    path: "/ViewDrugs",
  },
  {
    id: 5,
    name: "Home",
    bg_color: "bg-white-300",
    img: home,
    path: "/DrugStore",
  },
];

function UpdateDrugs() {
  return (
    <div>
     
      <div className="flex justify-center">
        <div className="flex justify-center w-full grid-cols-4 gap-10 mt-0 grid-rows-1">
          {topButtons.map((item) => (
            <button
              key={item.id}
              className={`flex flex-col object-cover h-20 w-20 items-center p-4 m-5 rounded-full ${
                item.name === "View Past Health Records"
                  ? `bg-gray-200  underline`
                  : item.bg_color
              } hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
            >
              <div className="flex justify-center">
                <Link to={item.path}>
                  <img className="justify-center" src={item.img} />
                </Link>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-screen-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-center text-blue-900 ">
            Update Drug
          </h1>
          <div className="mb-6 text-l px-3 py-2  text-blue-900 ">
            Drug Name
            <input
              type="name"
              placeholder="Drug Name"
              className="w-full px-3 py-2 mb-6 border rounded"
              required
            />
          </div>
          <div className="mb-6 text-l px-3 py-2  text-blue-900 ">
            Drug Brand
            <input
              type="brand"
              placeholder="Drug Brand"
              className="w-full px-3 py-2 mb-6 border rounded"
              required
            />
          </div>
          <div>
            <Link to="/UpdateDrugs1">
              <button className="px-4 py-2 text-white bg-red-800 rounded hover:bg-yellow-300 items-center justify-center text-center">
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default UpdateDrugs;
