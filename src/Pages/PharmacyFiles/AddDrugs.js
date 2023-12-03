import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import home from "../../Assets/home.png";

const topButtons = [
  {
    id: 1,
    name: "Add Drugs",
    bg_color: "bg-green-600",
    path: "/PharmacyFile/AddDrugs",
  },
  {
    id: 2,
    name: "Update Drugs",
    bg_color: "bg-blue-500",
    path: "/PharmacyFile/UpdateDrugs",
  },
  {
    id: 3,
    name: "Delete Drugs",
    bg_color: "bg-purple-600",
    path: "/PharmacyFile/DeleteDrugs",
  },
  {
    id: 4,
    name: "View Drugs",
    bg_color: "bg-yellow-300",
    path: "/PharmacyFile/ViewDrugs",
  },
];

function AddDrugs() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <div className="grid w-full grid-cols-4 gap-0 mt-1 grid-rows-1">
            {topButtons.map((item) => (
              <button
                key={item.id}
                className={`flex flex-col item-center p-5 ${
                  item.name === "Medicine"
                    ? `bg-gray-200 text-red-500 underline`
                    : item.bg_color
                } hover:bg-gray-200`}
              >
                <div className="flex justify-center text-end"></div>
                <Link to={item.path}>{item.name}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <img className="w-12 m-5 ml-5 " src={home} alt="Doctor-Home" />
        </Link>
      </div>
      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-screen-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-center text-blue-900 ">
            Adding Drug
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
         
          <div className="mb-6 text-l px-3 py-2  text-blue-900 ">
            Amount
            <input
            type="amount"
            placeholder="Amount"
            className="w-full px-3 py-2 mb-6 border rounded"
            required
          />
          </div>
          <div>
          <Link to="/PharmacyFile/ViewDrugs">
            <button className="px-4 py-2 text-white bg-red-800 rounded hover:bg-yellow-300 items-center justify-center text-center">
              Add
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AddDrugs;
