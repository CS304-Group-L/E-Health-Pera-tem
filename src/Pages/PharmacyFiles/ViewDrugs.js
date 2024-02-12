import React, { useState, useEffect } from "react";
import axios from "axios";
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

function ViewDrugs() {
  const [pharmacyData, setPharmacyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/pharmacy");
        console.log("Response Data:", response.data); // Log the response data
        setPharmacyData(response.data);
      } catch (error) {
        console.error("Error fetching pharmacy data:", error);
      }
    };
    fetchData();
  }, []);
  

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

      <div className=" bg-blue-300 text-xl p-4 flex justify-center">
            <h1>Drug Stores</h1>
          </div>

          <div className=" bg-white border-b border-black-800">
            <table className="min-w-full divide-y divide-black-200 border border-gray-300">
              <thead className="bg-blue-200">
                <th
                  scope="col"
                  className="px-4 py-2 text-middle text-s font-medium text-black-500 uppercase tracking-wider"
                >
                  Drug Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-middle text-s font-medium text-black-500 uppercase tracking-wider"
                >
                  Drug Brand
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-middle text-s font-medium text-black-500 uppercase tracking-wider"
                >
                  Amount
                </th>
              </thead>
          <tbody className="bg-blue-100">
            {pharmacyData.map((pharmacy) => (
              <tr key={pharmacy.id}>
                <td className="border px-4 py-2">{pharmacy.drug_name}</td>
                <td className="border px-4 py-2">{pharmacy.drug_brand}</td>
                <td className="border px-4 py-2">{pharmacy.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ViewDrugs;
