import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from '../Assets/home.png';

const topButtons = [
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
        // You should make an API call to the backend here to fetch health records
        // For this example, let's assume we have a mock API function
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
                <div className="grid w-full grid-cols-2 gap-0 mt-0 grid-rows-1">
                    {topButtons.map((item => (
                        <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'View Past Health Records' ? `bg-gray-200  underline` : item.bg_color} hover:bg-gray-200`}>
                            <div className="flex justify-center ">
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </div>

                        </button>
                    ))

                    )}
                </div>
            </div>
            <div className='px-4 py-2 absolute right-0 mt-1 mr-10 mb-10'>
                <Link to="/DoctorBoard"><img className="w-12 m-5 ml-5 " src={home} alt='Doctor-Home' /></Link>
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