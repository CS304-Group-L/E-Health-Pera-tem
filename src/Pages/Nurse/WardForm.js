import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function WardForm() {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 10); // Get date in YYYY-MM-DD format
            return formattedDate;
        };

        setDate(getCurrentDate());
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
                <h2 className="text-2xl font-bold mb-5">WARD FORM</h2>
                <form onSubmit={handleSubmit}>
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
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Description
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap text-left">
                                {date}
                                </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                                 className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                placeholder="Description" />
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

export default WardForm;

