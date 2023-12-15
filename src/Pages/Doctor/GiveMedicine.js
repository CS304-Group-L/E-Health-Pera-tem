import React, { useState } from "react";
import home from "../../Assets/home.png"
import { Link } from "react-router-dom";


const topButtons = [
    {
        id: 1,
        name: "Give Medicine",
        bg_color: "bg-purple-600",
        path: "/GiveMedicine"
    },
    {
        id: 2,
        name: "View Medicine Details",
        bg_color: "bg-red-400",
        path: "/ViewPastMedicineRecordsSearch"
    }
];

function GiveMedicine() {

    const [enrollNumber, setEnrollNumber] = useState('');
    const [medicineName, setMedicineName] = useState('');
    const [prescriptionList, setPrescriptionList] = useState([]);

    const handleAddMedicine = () => {
        if (medicineName.trim() !== '') {
            setPrescriptionList([...prescriptionList, medicineName]);
            setMedicineName('');
        }

    };

    const handleDeleteMedicine = (index) => {
        const updatedList = prescriptionList.filter((_, i) => i !== index);
        setPrescriptionList(updatedList);
      };

    const handleEnrollNumberChange = (e) => {
        setEnrollNumber(e.target.value);
    };

    const handleMedicineNameChange = (e) => {
        setMedicineName(e.target.value);
    };

    const handleSubmit = () => {
        // Here you would send the data to the backend (API call).
        //This is for now
        console.log('Enroll Number:', enrollNumber);
        console.log('Prescription List:', prescriptionList);
    };

    return (
        <div className="block mb-2 font-semibold font-poppins">

            <div className="flex justify">
                <div className="grid w-full grid-cols-2 gap-0 mt-0 grid-rows-1">
                    {topButtons.map((item => (
                        <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'Give Medicine' ? `bg-gray-200 underline` : item.bg_color} hover:bg-gray-200`}>
                            <div className="flex justify-center text-end">
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </div>

                        </button>
                    ))

                    )}
                </div>

            </div>
            <div className='px-4 py-2 absolute right-0 mt-5 mr-10'>
                <Link to="/DoctorBoard">
                    <img className="w-12 m-5 ml-5 " src={home} alt='Doctor-Home' />
                </Link>
            </div>

            <div>

            </div>
            <div className="mt-10 m-5 mb-5">
                <h1 className="text-3xl font-bold mb-8 underline mt-20 m-3">Give Medicine</h1>
                <div className="m-5">
                    <label>
                        Enter Enrollment Number:
                    </label>
                </div>
                <div className="m-5">
                    <input
                        type="text"
                        value={enrollNumber}
                        onChange={handleEnrollNumberChange}
                        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-1/2 resize-none bg-gray-100 h-50"
                        placeholder="Enter enroll number here"
                    />

                </div>
                <div className="m-5">
                    <label>
                        Enter Medicine Name:
                    </label>
                </div>
                <div className="m-5">
                    <input
                        type="text"
                        value={medicineName}
                        onChange={handleMedicineNameChange}
                        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-1/2 resize-none bg-gray-100 h-50"
                        placeholder="Enter medicine name here"
                    />
                    <button onClick={handleAddMedicine} className="text-black bg-green-400 rounded hover:bg-green-500 text-white px-5 py-2 absolute ml-5">
                        Add Medicine
                    </button>
                </div>

                <div className="m-5">

                </div>

               <div className="border border-gray-300 w-1/2 m-5">

               <h3 className=" underline mt-3 m-3">
       Medicine For Student Enrollment Number: {enrollNumber && <strong>{enrollNumber}</strong>}
      </h3>
               <h4 className=" underline mt-3 m-3">Medicine List</h4>

<div className="m-5 p-5">
    <ul className=" border border-gray-300 w-1/2 px-7 py-4">
        {prescriptionList.map((medicine, index) => (
            <li key={index} className="flex items-center justify-between">
                <span>
              {index + 1}. {medicine}
            </span>
                <button onClick={() => handleDeleteMedicine(index)} className="text-black bg-red-400 rounded hover:bg-red-500 text-white p-1 ml-2">
                    Delete
                </button>
            </li>
        ))}
    </ul>
    <div>
                    <button onClick={handleSubmit} className="text-black bg-blue-400 rounded hover:bg-blue-500 text-white px-4 py-2 mt-3">
                        Submit Prescription
                    </button>
</div>
               </div>

                
                </div>
            </div>
        </div>

    );
}

export default GiveMedicine;