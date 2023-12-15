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

            navigate('/DoctorBoard');
        }, 1000);
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
                <div className="mb-2 text-right text-gray-500">{currentDateTime}</div>
                <div className='text-3xl font-bold mb-8 underline'>
                    Give Medical
                </div>
                <form onSubmit={handleSubmit}>
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