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

function DraftedLabReport() {

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
            </div>
            
        
        </div>
    );
}

export default  DraftedLabReport;