import { Link, useNavigate } from "react-router-dom";
import { useDrop } from "react-dnd";
//import home from '../Assets/home.png';
import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LabTable from "./LabTable";

const topButtons = [
  {
    id: 1,
    name: "Issue Laboratory Tset",
    bg_color: "bg-yellow-300",
    path: "/IssueLaboratoryTest",
  },
  {
    id: 2,
    name: "View Past Health Records",
    bg_color: "bg-red-400",
    path: "/ViewPastLaboratoryTestSearch",
  },
];

function IssueLaboratoryTest() {
  const [enrollNumber, setenrollNumber] = useState("");
  const [test, setTest] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const navigate = useNavigate();

  const updateCurrentDateTime = () => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
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
      setSuccessMessage("Data saved successfully.");

      navigate("/DoctorBoard");
    }, 1000);
  };

  //Drag and Drop system of selecting lab report type
  const [selectedTest, setSelectedTest] = useState("");

  const handleDrop = (item) => {
    setSelectedTest(item.name);
  };

  const [, drop] = useDrop({
    accept: "LAB_TEST",
    drop: (item) => handleDrop(item),
  });

  return (
    <div className="block mb-2 font-semibold font-poppins">
      <DndProvider backend={HTML5Backend}>
        <div className="flex justify-center">
          <div className="grid w-full grid-cols-2 gap-0 mt-0 grid-rows-1">
            {topButtons.map((item) => (
              <button
                key={item.id}
                className={`flex flex-col item-center p-5 ${
                  item.name === "Issue Laboratory Tset"
                    ? `bg-yellow-100  underline`
                    : item.bg_color
                } hover:bg-gray-200`}
              >
                <div className="flex justify-center ">
                  <Link to={item.path}>{item.name}</Link>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="px-4 py-2 absolute right-0 mt-1 mr-10">
          <Link to="/DoctorBoard">
            {/* <img className="w-12 m-5 ml-5 " src={home} alt="Doctor-Home" /> */}
          </Link>
        </div>

        <div className="m-5 mt-40 border border-gray-300 p-9">
          {successMessage && <p>{successMessage}</p>}
          <div className="mb-2 text-right text-gray-500">{currentDateTime}</div>
          <div className="text-3xl font-bold mb-8 underline">
            Request For Laboratory Test
          </div>
          <form onSubmit={handleSubmit}>
            <div className="m-5">
              <label>
                Student Enrollment Number:
                <div className="mt-5">
                  <input
                    type="text"
                    value={enrollNumber}
                    onChange={(e) => setenrollNumber(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-1/2"
                    placeholder="Enter number here"
                  />
                </div>
              </label>
            </div>

            <div className="m-5">
              <label>
                Test Name:
                <div className="mr-8" ref={drop}>
                  <h2 className="text-xl font-bold mb-4">Drop Lab Test Here</h2>
                  <input
                    type="text"
                    value={selectedTest}
                    readOnly
                    className="border p-2 rounded-md"
                  />
                </div>
              </label>
            </div>
            <div className="m-5">
              <label>
                Doctor Name:
                <div className="mt-5">
                  <input
                    type="text"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-1/2"
                    placeholder="Dr. "
                  />
                </div>
              </label>
              <button
                type="submit"
                className="text-black bg-blue-500 rounded hover:bg-blue-600 text-white px-4 py-2 absolute right-0 mt-2 mr-10 mb-10 p-5"
              >
                Save & Send Copy To Laboratory
              </button>
            </div>

            <div className="m-5 mt-5 mr-10">
              <LabTable
                labTests={[
                  { id: 1, name: "Blood Test" },
                  { id: 2, name: "Urine Test" },
                  { id: 3, name: "X-ray" },
                ]}
              />
            </div>
          </form>
        </div>
      </DndProvider>
    </div>
  );
}

export default IssueLaboratoryTest;
