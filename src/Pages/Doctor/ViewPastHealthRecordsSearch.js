import React, { useState } from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import home from '../../Assets/home.png';
import medicalRecord from "../../Assets/medical_record.png";
import medicine from "../../Assets/medicine_icon.png";
import lab from "../../Assets/lab icon.png";
import medical from "../../Assets/medical.png";
import add from "../../Assets/add.png";
import searchs from "../../Assets/search.png";

const topButtons = [
  {
    id: 1,
    name: "Health Records",
    bg_color: "bg-green-600",
    img: medicalRecord,
    path: "/HealthRecords",
  },
  {
    id: 2,
    name: "Medical Report",
    bg_color: "bg-blue-500",
    img: medical,
    path: "/MedicalReport",
  },
  {
    id: 3,
    name: "Medicine",
    bg_color: "bg-purple-600",
    img: medicine,
    path: "/Medicines",
  },
  {
    id: 4,
    name: "Laboratory Test",
    bg_color: "bg-yellow-300",
    img: lab,
    path: "/LabReport",
  },
  {
    id: 5,
    name: "Home",
    bg_color: "bg-white-300",
    img: home,
    path: "/DoctorBoard",
  },
];

const sideButtons = [
  {
    id: 1,
    name: "Add Health Record",
    bg_color: "bg-green-600",
    img: add,
    path: "/AddHealthRecord",
  },
  {
    id: 2,
    name: "View Past Health Records",
    bg_color: "bg-red-400",
    img: searchs,
    path: "/ViewPastHealthRecordsSearch",
  },
];

function ViewPastHealthRecordsSearch() {
  const [enrollNumber, setEnrollNumber] = useState("");
  const [healthRecords, setHealthRecords] = useState([]);

  useEffect(() => {
    // Fetch health records from the backend when the component mounts
    fetchHealthRecords();
  }, []);

  const fetchHealthRecords = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/healthRecord/viewHealthRecords?studentNumber=${enrollNumber}`
      );
      const data = await response.json();
      setHealthRecords(data);
    } catch (error) {
      console.error("Error fetching health records:", error);
    }
  };

  return (
    <div className="block mb-2 font-semibold font-poppins">
      <div className="flex justify-center">
        <div className="flex justify-center w-full grid-cols-4 gap-10 mt-0 grid-rows-1">
          {topButtons.map((item) => (
            <button
              key={item.id}
              className={`flex flex-col object-cover h-20 w-20 items-center p-4 m-5 rounded-full ${item.name === 'View Past Health Records' ? `bg-gray-200  underline` : item.bg_color} hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
            >
              <div className="flex justify-center">
                <Link to={item.path}>
                  <img className="justify-center" src={item.img} alt={item.name} />
                </Link>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8">
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      Enter Enrollment Number:
      <input
        type="text"
        value={enrollNumber}
        onChange={(e) => setEnrollNumber(e.target.value)}
        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />
    </label>
    <button
      onClick={fetchHealthRecords}
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
    >
      Fetch Health Records
    </button>
  </div>
  <h2 className="text-2xl font-bold mb-4">Health Records</h2>
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Date</th>
        <th className="py-2 px-4 border-b">Time</th>
        <th className="py-2 px-4 border-b">Student Number</th>
        <th className="py-2 px-4 border-b">Description</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(healthRecords) && healthRecords.length > 0 ? (
        healthRecords.map((record) => (
          <tr key={record.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{record.date}</td>
            <td className="py-2 px-4 border-b">{record.time}</td>
            <td className="py-2 px-4 border-b">{record.studentNumber}</td>
            <td className="py-2 px-4 border-b">{record.description}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="py-2 px-4 border-b text-gray-500">
            No health records found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default ViewPastHealthRecordsSearch;
