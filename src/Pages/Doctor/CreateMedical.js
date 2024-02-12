import { Link, useNavigate } from 'react-router-dom';
import home from '../../Assets/home.png';
import { useState,useEffect } from 'react';



const topButtons = [
    {
        id: 1,
        name: "Create Medical",
        bg_color: "bg-blue-600",
        path: "/CreateMedical"
    },
    {
        id: 2,
        name: "View Past Medical Records",
        bg_color: "bg-red-400",
        path: "/ViewPastMedicalRecordsSearch"
    }];




function CreateMedical() {
    const [enrollNumber, setEnrollNumber] = useState('');
    const [description, setDescription] = useState('');
    const [examName, setExamName] = useState('');
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
    
        const response = await fetch('http://localhost:8080/api/v1/medicals/addMedicals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date,
                time,
                studentNumber: enrollNumber,
                examName: examName,
                description:description
            }),
        });
    
        if (response.ok) {
            const result = await response.json();
            setSuccessMessage(result.message);
            navigate('/ViewPastMedicineRecords');
        } else {
            // Handle error
            console.error('Failed to save data');
        }
    };

    return (
        <div className='block mb-2 font-semibold font-poppins'>
            <div className="flex justify-center">
                <div className="grid w-full grid-cols-2 gap-0 mt-0 grid-rows-1">
                    {topButtons.map((item => (
                        <button key={item.id} className={`flex flex-col item-center p-5 ${item.name === 'Create Medical' ? `bg-gray-100  underline` : item.bg_color} hover:bg-gray-200`}>
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
            <div className='px-4 py-2 absolute right-0 mt-1 mr-10'>
                <Link to="/DoctorBoard"><img className="w-12 m-5 ml-5 " src={home} alt='Doctor-Home' /></Link>
            </div>
            <div className='m-10 mt-40 border border-gray-300 p-12 pb-20'>
                {successMessage && <p>{successMessage}</p>}
                
                                
                <div className='text-3xl font-bold mb-8 underline'>
                    Give Medical
                </div>
                <form onSubmit={handleSubmit}>
                <div className="px-6 py-4 whitespace-nowrap">Date : {date}</div>
                <div className="px-6 py-4 whitespace-nowrap">Time : {time}</div>
                    <div className='m-5'>
                        <label>
                            Student Enrollment Number:
                            <div className='mt-5'>
                                <input type="text" value={enrollNumber} onChange={(e) => setEnrollNumber(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-1/2"
                                    placeholder="Enter number here" />
                            </div>
                        </label>
                    </div>
                    <label className="block mb-2 m-5">
                        Exam Name:
                        <div className='mt-5'>
                            <input type="text" value={examName} onChange={(e) => setExamName(e.target.value)}
                                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full resize-none bg-gray-100 h-50"
                                placeholder="Enter exam name here"
                            />
                        </div>
                    </label>
                    <label className="block mb-2 m-5">
                        Doctor Report:
                        <div className='mt-5'>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full resize-none bg-gray-100 h-50"
                                placeholder="Enter description here"
                            />
                        </div>
                    </label>
                    <div className='m-10 mr-10 mb-10'>
                    <button type="submit" className="text-black bg-blue-400 rounded hover:bg-blue-500 text-white px-4 py-2 absolute right-0 mt-2 mr-12 mb-5">
                        Save & Send E-mail
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateMedical;