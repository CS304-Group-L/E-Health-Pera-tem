import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from '../Assets/home.png';
import medicalRecord from "../Assets/medical_record.png";
import medicineT from "../Assets/medicine_icon.png";
import lab from "../Assets/lab icon.png";
import medical from "../Assets/medical.png";


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

const sideButtons = [
    {
        id: 1,
        name: "Add Health Record",
        bg_color: "bg-green-600",
        path: "/AddHealthRecord"
    },
    {
        id: 2,
        name: "View Past Health Records",
        bg_color: "bg-red-400",
        path: "/ViewPastHealthRecordsSearch"
    }];

function ViewPastHealthRecordsSearch() {

    const [enrollNumber, setEnrollNumber] = useState('');
    const [healthRecords, setHealthRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        // API call to the backend here to fetch health records
        setLoading(true);
        try {
            const records = await fetchHealthRecordsFromBackend(enrollNumber);
            setHealthRecords(records);
        } catch (error) {
            console.error('Error fetching health records:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchHealthRecordsFromBackend = async (enrollNumber) => {

        // Mock API function replace this with your actual API call

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, date: '2023-01-01', description: 'Checkup' },
                    { id: 2, date: '2023-02-15', description: 'Vaccination' },
                ]);
            }, 1000); // Simulating a delay for the API call
        });
    };

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
            
            <div className='text-3xl font-bold mb-8 underline mt-20 m-3 '>
                Student Past Health Records
            </div>
            <div className="p-5 text-center">
                <label className="pt-5">
                    Student Enrollment Number:
                </label>
                <div className="pt-5 text-center">
                    <input
                        type="text"
                        value={enrollNumber}
                        onChange={(e) => setEnrollNumber(e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-1/2"
                        placeholder="Enter number here"
                    />
                </div>
                <div>
                    <button onClick={handleSearch} disabled={loading} className="text-black bg-blue-500 rounded hover:bg-blue-600 text-white px-4 py-2 mt-10 text-center">
                        Search
                    </button>
                </div>


            </div>
            <div className="m-10 px-3 py-2 rounded-md p-5">

                {loading && <p>Loading...</p>}

                <table className="w-full mt-4">
                    <thead>
                        <tr>
                            <th className="border p-2"> </th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {healthRecords.map((record, index) => (
                            <tr key={record.id}>
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{record.date}</td>
                                <td className="border p-2">{record.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewPastHealthRecordsSearch;