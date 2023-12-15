import { Link, useNavigate } from 'react-router-dom';
import { useDrop } from 'react-dnd'
import home from '../../Assets/home.png';
import medicalRecord from "../../Assets/medical_record.png";
import medicineT from "../../Assets/medicine_icon.png";
import lab from "../../Assets/lab icon.png";
import medical from "../../Assets/medical.png";
import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { LabReportTable } from '../DoctorLabPages/LabReportTable/LabReportTable';

const topButtons = [
    {
        id: 1,
        name: "Health Records",
        bg_color: "bg-green-600",
        img: medicalRecord,
        path: "/HealthRecords"
    },
    {
        id: 2,
        name: "Medical Report",
        bg_color: "bg-blue-500",
        img: medical,
        path: "/MedicalReport"
    },
    {
        id: 3,
        name: "Medicine",
        bg_color: "bg-purple-600",
        img: medicineT,
        path: "/Medicines"
    },
    {
        id: 4,
        name: "Laboratary Test",
        bg_color: "bg-yellow-300",
        img: lab,
        path: "/LabReport"
    },
    {
        id: 5,
        name: "Home",
        bg_color: "bg-white-300",
        img: home,
        path: "/DoctorBoard"
    }
];

    function IssueLaboratoryTestNew () {
        return(
            <div className='block mb-2 font-semibold font-poppins'>

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
                <div>
                    <LabReportTable/>
                </div>

            </div>
        );
    }
    export default IssueLaboratoryTestNew;