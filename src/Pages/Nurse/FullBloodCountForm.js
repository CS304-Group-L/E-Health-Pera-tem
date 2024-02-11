import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import intake from "../../Assets/intake out put.png";
import bloodcell from "../../Assets/blood cell nurse.png";
import temperature from "../../Assets/temperature.png";
import medicine from "../../Assets/medicine nurse.png";
import ward from "../../Assets/ward.png";
import exit from "../../Assets/exit nurse.png";

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

function FullBloodCountForm() {
    const [test, setTest] = useState('');
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const getCurrentDateTime = () => {
            const now = new Date();
            const formattedDateTime = `${now.toISOString().slice(0, 10)}  ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`; // Concatenate date and time with a space
            return formattedDateTime;
        };

        setDateTime(getCurrentDateTime());
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
                <h2 className="text-2xl font-bold mb-5">Full Blood Count Chart</h2>
                <div className="flex gap-4 mb-5">
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
                    <div className="grid grid-cols-3 grid-rows-5 p-1 m-1 text-l">
                        <div> Name </div>
                        <div>:</div>
                        <div>From Back-End</div> 
                        <div> Registration Number  </div>
                        <div>:</div>
                        <div>From Back-End</div>
                    </div>
                    <div>
                        <input type="text" className="whitespace-nowrap text-left" value={dateTime} disabled />
                    </div>
                    <div className="bg-white border-b border-black-800">
                        <table className="min-w-full divide-y divide-black-200 border border-gray-300">
                            <thead className="bg-blue-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Parameter
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Test Value 
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Male
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                        Female
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-black-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                        Hemoglobin (g/dL)
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                        <input type="text" value={test.hematocrit} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, hematocrit: e.target.value})} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                        13.8-17.2  
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                        12.1-15.1
                                    </td>
                                </tr>
                                {/* Add more rows here */}
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

export default FullBloodCountForm;




