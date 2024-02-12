import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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

function DeleteDrugs({ role }) {
  const [drugData, setDrugData] = useState({
    drugName: "",
    drugBrand: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDrugData({ ...drugData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/pharmacy/{pharmacyId}`, // Use template literal to include pharmacyId
        drugData
      );
      console.log(response.data);
  
      console.log("Before navigation");
  
      if (response.data === "Delete successful") {
        console.log("Role:", role);
        navigate(`/DrugStore`);
      } else {
        setErrorMessage(response.data || "Fail to delete the drug");
      }
  
      // Log after navigation
      console.log("After navigation");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data || "Fail to delete the drug");
      } else {
        setErrorMessage("Fail to delete the drug");
      }
    }
  };
  
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
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col justify-center"
          >
            <h1 className="mb-6 text-2xl font-bold text-center text-blue-900 ">
              Delete Drug
            </h1>
            <div className="mb-6 text-l px-3 py-2  text-blue-900 ">
              Drug Name
              <input
                className="w-full px-3 py-2 mb-6 border rounded"
                id="drugName"
                type="drugName"
                placeholder="Enter Drug Name"
                name="drugName"
                value={drugData.drugName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6 text-l px-3 py-2  text-blue-900 ">
              Drug Brand
              <input
                className="w-full px-3 py-2 mb-6 border rounded"
                id="drugBrand"
                type="drugBrand"
                placeholder="Enter Drug Brand"
                name="drugBrand"
                value={drugData.drugBrand}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button className="px-4 py-2 text-white bg-red-800 rounded hover:bg-yellow-300 items-center justify-center text-center">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteDrugs;
