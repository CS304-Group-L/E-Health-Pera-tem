import React from "react";
import newLabTest from "../../Assets/new_lab_test.png";
import draftLabTest from "../../Assets/draft_lab_test.png";
import submitedLabTest from "../../Assets/submit_lab_test.png";
import allLabTest from "../../Assets/all_lab_reports.png";
import home from "../../Assets/home.png";
import { Link } from "react-router-dom";

const topButtons = [
  {
    id: 1,
    name: "New Lab Report Request",
    bg_color: "bg-green-500",
    img: newLabTest,
    path:"/NewLabReportrequest"
  },
  {
    id: 2,
    name: "Drafted Lab Reports",
    bg_color: "bg-red-400",
    img: draftLabTest,
    path:"/DraftedLabReport"
  },
  { id: 3, 
    name: "Submitted Lab Reports", 
    bg_color: "bg-blue-400", 
    img: submitedLabTest,
    path:"/SubmittedLabReport" 
  },
  {
    id: 4,
    name: "All Lab Report Types",
    bg_color: "bg-purple-400",
    img: allLabTest,
    path:"/AllLabReports"
  },
  {
    id: 5,
    name: "Home",
    bg_color: "bg-gray-200",
    img: home,
    path: "/Laboratory"
}
];

function SubmittedLabReport() {

    return (
        <div>


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

                <div className="flex flex-col items-center">
            <div className="mt-10  mb-6">
                <h2>Student Information</h2>
                </div>
                <div className="bg-white border-b border-black-800">
                    <table className="min-w-full divide-y divide-black-200 border border-gray-300">
                        <thead className="bg-blue-200">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">Student Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">Student Number</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">Time</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 ZzZtracking-wider">Tharuka Samarakoon</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 tracking-wider">S18494</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 tracking-wider">2024.02.12</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 tracking-wider">09.34</th>
                                <th scope="col" className="px-6 py-3 text-left text-s font-medium text-black-500 tracking-wider">---</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            </div>
            
        
        </div>
    );
}

export default  SubmittedLabReport;