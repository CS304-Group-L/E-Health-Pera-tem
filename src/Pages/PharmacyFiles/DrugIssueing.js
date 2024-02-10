import React from "react";
import { Link } from "react-router-dom";
import home from "../../Assets/home.png";
import { useState,useEffect } from 'react';

function DrugIssueing() {

  const [drugAmount, setdrugAmount] = useState([]);
  
  return (
    <div>
            <div className="pt-5 overflow-hidden bg-white rounded "></div>

<div className="flex pl-5 pr-5 divide-x">
  <div className="flex flex-col w-80 ">
    <div>
      <Link to="/Notices">
        <button className="items-center h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
        From Backend
        </button>
      </Link>
    </div>
    <div className="my-2"></div>
    <div>
      <Link to="/Update">
        <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
        From Backend
        </button>
      </Link>
    </div>
    <div className="my-2"></div>
    <div>
      <Link to="/News_page">
        <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
        From Backend
        </button>
      </Link>
    </div>
    <div className="my-2"></div>
    <div>
      <Link to="/Article">
        <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
        From Backend
        </button>
      </Link>
    </div>
    <div className="my-2"></div>
    <div>
      <Link to="/Events">
        <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
        From Backend
        </button>
      </Link>
    </div>
    <div className="my-2"></div>
    <div>
      <Link to="/Other">
        <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
          From Backend
        </button>
      </Link>
    </div>
    <div className="my-2"></div>

    
  </div>

  <div className="object-cover object-none w-full h-200">
  <div className="bg-blue-200 w-full flex pl-5 p-5">
                    <div className="grid grid-cols-3 grid-rows-5 p-3 m-2 text-l">
                        <div>Name</div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Std. Number</div>
                        <div>:</div>
                        <div>From Back End</div>

                        <div>Date</div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Time</div>
                        <div>:</div>
                        <div>From Back End</div>
                        <div>Doctor Name</div>
                        <div>:</div>
                        <div>From Back End</div>
                        
                        
                    </div>
                </div>

                <div className=" bg-blue-300 text-xl p-5 flex justify-center">
                    <h1>
                    TOTAL PROTEIN
                    </h1>
                </div>

                <div className=" bg-white border-b border-black-800">
                    <table className="min-w-full divide-y divide-black-200 border border-gray-300">
                        <thead className="bg-blue-200">
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Drug Name
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Issueing Amount
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Drug Type
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
                                Stored Amount
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                First Drug (From Backend)    
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <input type="text" value={drugAmount} onChange={(e) => setdrugAmount(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    placeholder="Tested Value" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap"> From Backend </td>
                                <td className="px-6 py-4 whitespace-nowrap">  From Backend</td>
                            </tr>
                            <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                            Second Drug (From Backend)
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <input type="text" value={drugAmount} onChange={(e) => setdrugAmount(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    placeholder="Tested Value" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap"> From Backend </td>
                                <td className="px-6 py-4 whitespace-nowrap">  From Backend</td>
                            </tr>

                            <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                   Third Drug (From Backend) 
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                <input type="text" value={drugAmount} onChange={(e) => setdrugAmount(e.target.value)}
                                    className="border border-blue-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    placeholder="Tested Value" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">  From Backend  </td>
                                <td className="px-6 py-4 whitespace-nowrap">   From Backend </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


  </div>
</div>
    </div>
  );
}
export default DrugIssueing;
