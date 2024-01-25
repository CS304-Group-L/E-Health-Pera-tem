import React from "react";
import newLabTest from "../../Assets/new_lab_test.png";
import draftLabTest from "../../Assets/draft_lab_test.png";
import submitedLabTest from "../../Assets/submit_lab_test.png";
import allLabTest from "../../Assets/all_lab_reports.png";
import home from "../../Assets/home.png";
import labReports from "../DoctorLabPages/LabReportTable/ListOfLabReports.json"
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

function AllLabReports() {

    return (
        <div className="block mb-2 font-semibold font-poppins" >


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
            <div className="flex justify-center m-3">
                <h1>All Laboratory Test Reports</h1>
            </div>

            <div className="flex justify-center grid grid-cols-4 gap-8 m-3 mr-5 ml-5 grid-rows-5">
            {labReports.map((item => (

<button key={item.id} className={`flex flex-col w-150 items-center bg-gray-200 rounded p-5 h-20 ${item.name === 'View Past Health Records' ? `bg-gray-200  underline` : item.bg_color} hover:shadow-lg transform hover:scale-100 transition-all duration-300`}
>
    <div className="flex justify-center">
        <Link to={item.path}>
            {item.report_name}
        </Link>
    </div>

</button>
))

)}


            </div>
            
        
        </div>
    );
}

export default  AllLabReports;