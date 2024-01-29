import React from "react";
import newLabTest from "../../Assets/new_lab_test.png";
import draftLabTest from "../../Assets/draft_lab_test.png";
import submitedLabTest from "../../Assets/submit_lab_test.png";
import allLabTest from "../../Assets/all_lab_reports.png";
import home from "../../Assets/home.png";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

const topButtons = [
    {
        id: 1,
        name: "New Lab Report Request",
        bg_color: "bg-green-500",
        img: newLabTest,
        path: "/NewLabReportrequest"
    },
    {
        id: 2,
        name: "Drafted Lab Reports",
        bg_color: "bg-red-400",
        img: draftLabTest,
        path: "/DraftedLabReport"
    },
    {
        id: 3,
        name: "Submitted Lab Reports",
        bg_color: "bg-blue-400",
        img: submitedLabTest,
        path: "/SubmittedLabReport"
    },
    {
        id: 4,
        name: "All Lab Report Types",
        bg_color: "bg-purple-400",
        img: allLabTest,
        path: "/AllLabReports"
    },
    {
        id: 5,
        name: "Home",
        bg_color: "bg-gray-200",
        img: home,
        path: "/Laboratory"
    }
];

function GGT() {
    const [labNumber, setLabNumber] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [result, setResult] = useState('');
    const [performedBy, setPerformedBy] = useState('');

    return (
        <div className="block mb-2 font-semibold font-poppins">
            <div className="flex justify-center">
                <div className="flex justify-center w-full grid-cols-4 gap-10 mt-0 grid-rows-1">
                    {topButtons.map((item => (

                        <button key={item.id} className={`flex flex-col object-cover h-20 w-20 items-center p-4 m-5 rounded-full ${item.name === 'View Past Health Records' ? `bg-gray-200  underline` : item.bg_color} hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
                        >
                            <div className="flex justify-center">
                                <Link to={item.path}>

                                    <img
                                        className="justify-center"
                                        src={item.img}
                                    />
                                </Link>
                            </div>

                        </button>
                    ))

                    )}

                </div>
            </div>

            <div className="flex justify-center border border-black-500 grid grid-cols-1 flex  w-3/4  p-10 gap-5 ml-20">
                <div className="flex justify-center underline text-xl">
                    <h1>Health Centre - Laboratory - University Of Peradeniya
                    </h1>
                </div>
                <div className="bg-blue-200 w-full flex pl-5 p-5">
                    <div className="grid grid-cols-3 grid-rows-5 p-3 m-2 text-l">
                        <div>Date </div>
                        <div>:</div>
                        <div>Requested date</div>
                        <div>Lab Number  </div>
                        <div>:</div>
                        <div>
                            <input type="text" value={labNumber} onChange={(e) => setLabNumber(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    placeholder="Enter lab Number" />
                                    </div>
                        <div>Name  </div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Age  </div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Requested By  </div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Reference Number  </div>
                        <div>:</div>
                        <div>
                        <input type="text" value={referenceNumber} onChange={(e) => setReferenceNumber(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    placeholder="Enter Reference Number" />
                        </div>
                    </div>
                </div>
                <div className=" bg-blue-300 text-xl p-5 flex justify-center">
                    <h1>
                        GGT Report
                    </h1>
                </div>

                <div className=" bg-white border-b border-black-800">
                    <table className="min-w-full divide-y divide-black-200 border border-gray-300">
                        <thead className="bg-blue-200">
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Test Name
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Result
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Units
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Reference Range
                            </th>
                        </thead>
                        <tbody>
                            
                            <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                            SERUM GAMMA GT 
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <input type="text" value={result} onChange={(e) => setResult(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    placeholder="Tested Value" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap"> IU/L</td>
                                <td className="px-6 py-4 whitespace-nowrap">Male: 11-50 <br></br> Female: 7-32 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                   <div className="grid grid-cols-2 gap-0 w-1/2 mt-5">
                    <div > Performed By : </div>
                    <div className="bg-blue-100">
                    <input type="text" value={performedBy} onChange={(e) => setPerformedBy(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    placeholder="Performed By" />
                    </div>
                   </div>

                </div>
                <div className="grid grid-cols-2 gap-5 mr-0 w-1/2 right-0 mt-10">
                    <button className="bg-red-500 p-4 rounded-full  hover:shadow-lg transform hover:scale-105 transition-all duration-300">Save Draft</button>
                    <button className="bg-blue-500 p-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">Submit</button>
                </div>
            </div>

        </div>
    );
}

export default GGT;