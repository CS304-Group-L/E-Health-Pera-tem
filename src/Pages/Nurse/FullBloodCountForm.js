import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                        
                        <input type="text"  className=" whitespace-nowrap text-left mt-6" value={dateTime} disabled />
                    </div>
                    <div className=" bg-white border-b border-black-800">
                    <table className="min-w-full divide-y divide-black-200 border border-gray-300">
                        <thead className="bg-blue-200">
                            <tr>
                                
                                <th scope="col"
                                    className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                    Parameter
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                    Test Value 
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                    Male
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
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
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    Hematocrit (%)
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    <input type="text" value={test.hematocrit} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, hematocrit: e.target.value})} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    40-52
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    36-48
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    Red Blood Cells (x10^6/μL)
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    <input type="text" value={test.redBloodCells} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, redBloodCells: e.target.value})} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    4.7-6.1
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    4.2-5.4
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                Mean Corpuscular Volume (fL)
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    <input type="text" value={test.redBloodCells} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, redBloodCells: e.target.value})} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                80-94	
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                80-94	80-94
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                Mean Corpuscular Hemoglobin (pg)	
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    <input type="text" value={test.redBloodCells} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, redBloodCells: e.target.value})} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                27-31	
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                27-31	
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                Mean Corpuscular Hemoglobin Concentration (g/dL)	
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    <input type="text" value={test.redBloodCells} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, redBloodCells: e.target.value})} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                33.4-35.5
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                33.4-35.5
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                White Blood Cells (x10^3/μL)		
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    <input type="text" value={test.redBloodCells} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, redBloodCells: e.target.value})} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                4.4-11.3
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                4.0-10.6
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                Platelets (x10^3/μL)		
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                    <input type="text" value={test.redBloodCells} className="border border-gray-300 rounded-md p-2" onChange={e => setTest({...test, redBloodCells: e.target.value})} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                150-400	
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                                4.0-10.6
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

export default FullBloodCountForm;



