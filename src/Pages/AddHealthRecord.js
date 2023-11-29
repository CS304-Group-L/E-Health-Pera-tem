import { Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
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




function AddHealthRecord() {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState('');
    const navigate = useNavigate();

    const updateCurrentDateTime = () => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        });
        setCurrentDateTime(formattedDateTime);
      };

      useEffect(() => {
        updateCurrentDateTime();
   
        const interval = setInterval(() => {
          updateCurrentDateTime();
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a successful submission
        //replace this with an actual API call when have a backend
        setTimeout(() => {
            setSuccessMessage('Data saved successfully.');

            navigate('/ViewPastHealthRecords');
        }, 1000);
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
            <div className='px-4 py-2 absolute right-0 mt-1 mr-10'>
                <Link to="/DoctorBoard"><img className="w-12 m-5 ml-5 " src={home} alt='Doctor-Home' /></Link>
            </div>
            <div className='m-5 mt-40'>
                {successMessage && <p>{successMessage}</p>}
                <div className="mb-2 text-right text-gray-500">{currentDateTime}</div>
                <form onSubmit={handleSubmit}>
                    <div className='m-5'>
                        <label>
                            Enter Enrollment Number:
                            <div className='mt-5'>
                                <input type="text" value={text} onChange={(e) => setText(e.target.value)}
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
                    <button type="submit" className="text-black bg-red-800 rounded hover:bg-yellow-300 text-white px-4 py-2 absolute right-0 mt-2 mr-10">
                        Save & View Health Records
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddHealthRecord;