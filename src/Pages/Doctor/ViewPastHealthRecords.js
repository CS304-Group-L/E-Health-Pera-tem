import React from "react";
import { useState, useEffect } from 'react';
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
            <div>
        <div>
          <label>
            Enter Enrollment Number:
            <input
              type="text"
              value={enrollNumber}
              onChange={(e) => setEnrollNumber(e.target.value)}
            />
          </label>
          <button onClick={fetchHealthRecords}>Fetch Health Records</button>
        </div>
        <h2>Health Records</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Student Number</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {healthRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.time}</td>
                <td>{record.studentNumber}</td>
                <td>{record.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
}

export default ViewPastHealthRecords;