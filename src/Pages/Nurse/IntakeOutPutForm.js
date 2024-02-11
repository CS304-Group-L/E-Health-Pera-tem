import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function IntakeOutPutForm() {
    const [description, setDescription] = useState('');
    const [volume, setVolume] = useState('');
    const [total, setTotal] = useState('');
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

    return (
        <div className="flex flex-col items-center">
            <div className="text-center w-3/4 p-10 m-10">
                <h1 className="text-xl font-bold underline mb-5">Health Center - University Of Peradeniya</h1>
                <h2 className="text-2xl font-bold mb-5">Intake Out Put Chart</h2>
                <div className="grid grid-cols-3 grid-rows-5 p-3 m-2 text-l">
                    <div> Name </div>
                    <div>:</div>
                    <div>From Back-End</div> 
                    <div> Registration Number  </div>
                    <div>:</div>
                    <div>From Back-End</div>
                </div>

                <div className=" bg-white border-b border-black-800">
                    <table className="min-w-full divide-y divide-black-200 border border-gray-300">
                        <thead className="bg-blue-200">
                            <th scope="colgroup" colSpan="5" className="text-left text-s font-medium text-black-500 uppercase tracking-wider">Intake</th>
                            
                            <th scope="colgroup" colSpan="5" className="text-left text-s font-medium text-black-500 uppercase tracking-wider">Output</th>
                        </thead>
                        <thead className="bg-blue-200">
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Time
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Volume
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Total
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Time
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Volume
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Total
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">{date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{time}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                                        className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                        placeholder="Description" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="text" value={volume} onChange={(e) => setVolume(e.target.value)}
                                        className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                        placeholder="Volume" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="text" value={total} onChange={(e) => setTotal(e.target.value)}
                                        className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                        placeholder="Total" />
                                </td>
                                
                                {/* Output */}
                                
                                <td className="px-6 py-4 whitespace-nowrap">{date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{time}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                                        className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                        placeholder="Description" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="text" value={volume} onChange={(e) => setVolume(e.target.value)}
                                        className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                        placeholder="Volume" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="text" value={total} onChange={(e) => setTotal(e.target.value)}
                                        className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                        placeholder="Total" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default IntakeOutPutForm;