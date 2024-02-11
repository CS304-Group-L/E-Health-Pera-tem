import React from "react";
import { Link } from "react-router-dom";
import intake from "../../Assets/intake out put.png";
import bloodcell from "../../Assets/blood cell nurse.png";
import temperature from "../../Assets/temperature.png";
import medicine from "../../Assets/medicine nurse.png";
import ward from "../../Assets/ward.png";
import exit from "../../Assets/exit nurse.png";
import { useState, useEffect } from 'react';

const options = [
    {
      id: 1,
      name: "Ward Forms",
      bg_color: "bg-blue-500",
      img:  ward,
      path:"/WardForm"
    },
    {
      id: 2,
      name: "Temperature Chart",
      bg_color: "bg-yellow-300",
      img: temperature,
      path:"/TemperatureForm"
    },
    { id: 3, 
      name: "Intake Out Put Chart", 
      bg_color: "bg-green-400", 
      img:intake,
      path:"/IntakeOutPutForm" 
    },
    {
      id: 4,
      name: "Drug Chart",
      bg_color: "bg-purple-400",
      img: medicine,
      path:"/DrugForm"
    },
    {
        id: 5,
        name: "Full Blood Count Chart",
        bg_color: "bg-red-400",
        img: bloodcell,
        path:"/FullBloodCountForm"
      },
      {
        id: 6,
        name: "Exit",
        bg_color: "bg-blue-100",
        img: exit,
        path:"/Service"
      },
  ];


function TemperatureForm() {
    const [description, setDescription] = useState('');
    const [temperature, setTemperature] =  useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 10); // Get date in YYYY-MM-DD format
            return formattedDate;
        };

        const getCurrentTime = () => {
          const now = new Date();
          const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get time in HH:MM format
          return formattedTime;
      };

        setDate(getCurrentDate());
        setTime(getCurrentTime());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted");
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-center w-3/4 p-10 m-10">
                <h1 className="text-xl font-bold underline mb-5">Health Center - University Of Peradeniya</h1>
                <h2 className="text-2xl font-bold mb-5">TEMPERATURE CHART</h2>
                <div className="flex gap-4">
                    {options.map(option => (
                        <Link to={option.path} key={option.id}>
                            <button className={`rounded-lg px-4 py-2 ${option.bg_color}`}>
                                <img src={option.img} alt={option.name} className="h-6 w-6 inline-block" />
                                <span className="ml-2">{option.name}</span>
                            </button>
                        </Link>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 grid-rows-5 p-3 m-2 text-l">
                        <div> Name </div>
                        <div>:</div>
                        <div>From Back-End</div> 
                        <div> Registration Number  </div>
                        <div>:</div>
                        <div>From Back-End</div>
                    </div>
                    <div className="bg-white border-b border-black-800">
                        <table className="min-w-full divide-y divide-black-200 border border-gray-300">
                            <thead className="bg-blue-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Temperature
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-left">
                                        {date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left">
                                        {time}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" value={temperature} onChange={(e) => setTemperature(e.target.value)} className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full" placeholder="Temperature" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full" placeholder="Description" />
                                    </td>
                                </tr>   
                            </tbody>
                        </table>       
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline"
                    > Submit
                    </button>
                </form>   
            </div>
        </div>
    );
}
export default TemperatureForm;
