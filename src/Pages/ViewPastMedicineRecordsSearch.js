import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from '../Assets/home.png';

const topButtons = [
    {
        id: 1,
        name: "Give Medicine",
        bg_color: "bg-purple-600",
        path: "/GiveMedicine"
    },
    {
        id: 2,
        name: "View Past Health Records",
        bg_color: "bg-red-400",
        path: "/ViewPastHealthRecordsSearch"
    }];

function ViewPastMedicineRecordsSearch() {

    const [enrollNumber, setEnrollNumber] = useState('');
    const [medicineRecords, setMedicineRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        // API call to the backend here to fetch health records
        setLoading(true);
        try {
            const records = await fetchMedicineFromBackend(enrollNumber);
            setMedicineRecords(records);
        } catch (error) {
            console.error('Error fetching medicine records:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMedicineFromBackend = async (enrollNumber) => {

        // Mock API function replace this with your actual API call

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, date: '2023-01-01', medicine: 'a,b,c' },
                    { id: 2, date: '2023-02-15', medicine: 'e,b,f' },
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
                Student Past Medicine Records
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
                            <th className="border p-2">Medicine List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicineRecords.map((record, index) => (
                            <tr key={record.id}>
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{record.date}</td>
                                <td className="border p-2">{record.medicine}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewPastMedicineRecordsSearch;