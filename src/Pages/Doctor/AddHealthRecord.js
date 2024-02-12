import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import home from '../../Assets/home.png';
import medicalRecord from "../../Assets/medical_record.png";
import medicineT from "../../Assets/medicine_icon.png";
import lab from "../../Assets/lab icon.png";
import medical from "../../Assets/medical.png";
import axios from 'axios';

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

function AddHealthRecord() {
    const [studentNumber, setStudentNumber] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/v1/healthRecord/addHealthRecords', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date,
                time,
                studentNumber: studentNumber,
                description,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            setSuccessMessage(result.message);
            navigate('/ViewPastHealthRecordsSearch');
        } else {
            // Handle error
            console.error('Failed to save data');
        }
    };

    return (
        <div className='block mb-2 font-semibold font-poppins'>
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
            <div className='m-5 mt-40'>
                {successMessage && <p>{successMessage}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="px-6 py-4 whitespace-nowrap">Date : {date}</div>
                    <div className="px-6 py-4 whitespace-nowrap">Time : {time}</div>
                    <div className='m-5'>
                        <label>
                            Enter Enrollment Number:
                            <div className='mt-5'>
                                <input type="text" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)}
                                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-1/2"
                                    placeholder="Enter number here" />
                            </div>
                        </label>
                    </div>
                    <label className="block mb-2 m-5">
                        Doctor Report:
                        <div className='mt-5'>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full resize-none bg-gray-100 h-50"
                                placeholder="Enter description here"
                            />
                        </div>
                    </label>
                    <div className='m-5 mt-5 mr-10'>
                        <button type="submit" className="text-black bg-red-800 rounded hover:bg-yellow-300 text-white px-4 py-2">
                            Save & View Health Records
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddHealthRecord;
