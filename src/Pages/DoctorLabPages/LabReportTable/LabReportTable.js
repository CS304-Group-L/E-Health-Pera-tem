import React, { useMemo } from "react";
import { useState } from 'react';
import { useTable , useSortBy} from "react-table";
import { useGlobalFilter} from "react-table";
import { Columns } from "./Clolumns";
import ListOfLabReports from './ListOfLabReports.json';
import { SearchLabTest } from "./SearchLabTset";
import {  useEffect } from 'react';

export const LabReportTable = ()=>{

    const [draggedItem,setDraggedItem] = useState(null);
    const [textBoxValue,setTextBoxValue] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctorName,setDoctorName] = useState('');

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

    const handleDoctorNameChange = (e) => {
        setDoctorName(e.target.value);
    };

    const handleDragStart = (event,item) => {
        console.log('Dragged value:', item);
        event.dataTransfer.setData('text/plain', item);
    setDraggedItem(item);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
      };

      const handleDrop = (event) => {
        event.preventDefault();
        const droppedItem = event.dataTransfer.getData('text/plain');
        setTextBoxValue(droppedItem);
        setDraggedItem(null);
      };

      const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
      };
    


    const columns = useMemo(()=>Columns,[])
    const data = useMemo(()=>ListOfLabReports,[])

   const tableInstance= useTable({
        columns,
        data
    },
    useGlobalFilter,
    useSortBy)

    const {
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter

    }= tableInstance

    const { globalFilter} = state

    return(

        <div className="p-5 pr-5 pl-5 block mb-2 font-semibold font-poppins">
            <div className="grid grid-cols-2 gap-5 table-auto border-collapse">
            <div className="border">
                <div className="text-justify-center text-3xl m-3 p-5 bg-yellow-200">
                    <h1>Laboratory Test List</h1>
                </div>
            <div className="justify-center p-5 pr-8">
            <SearchLabTest filter={globalFilter} setFilter={setGlobalFilter}/>
            </div>
            
            <table{...getTableProps()} className="border w-1/2  justify-center p-8">
                <thead className="bg-gray-50">
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column)=>(
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                            {column.render('Header')}
                                            <span className="p-3 bg-blue-200 right-0 ml-10">
                                                {column.isSorted ? (column.isSortedDesc ? 'By Des' :  'By Ase'): 'Sort'}
                                            </span>

                                        </th>
                                    ))
                                }
                        
                    </tr>
                        ))
                    }
                    

                </thead>
                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                    {
                        rows.map(row=>{
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell)=>{
                                        return <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 transition-transform transform hover:bg-gray-300" draggable
                                        onDragStart={(e) => handleDragStart(e, cell.value)}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}>
                                                {cell.render('Cell')}
                                        </td>
                                    })}
                        
                    </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            </div>
                <div className="center border w-full">
                    <div className="text-justify-center text-3xl m-3 p-5 bg-yellow-200">
                    <h1>Issuing Laboratory Test</h1>
                </div>
                    <div className="bg-gray-100 m-3 p-5" >
                        
                        <div className="p-1 m-1">
                        <div className="px-6 py-4 whitespace-nowrap">Date : {date}</div>
                    <div className="px-6 py-4 whitespace-nowrap">Time : {time}</div>
                    <label className="block mb-2 m-5">
                    Enter Enrollment Number:
                        <div className='mt-5'>
                            <input type="text" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)}
                                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full resize-none bg-gray-100 h-50"
                                placeholder="Enter description here"
                            />
                        </div>
                    </label>
                               
                            
                        </div>
                    <label >
                        Test Name : 
                    </label>
                <input
        type="text"
        value={textBoxValue}
        onChange={handleTextBoxChange}
        placeholder="Drop Lab Test here"
        className="border w-3/4 m-5 center"
      />
      <div>
                    <label >
                        Doctor Name : 
                    </label>
                <input
        type="text"
        value={doctorName}
                        onChange={handleDoctorNameChange}
        placeholder="Doctor Name"
        className="border w-3/4 m-5 center"
      />
                    </div>
                    <div className='m-5 mt-5 mr-10'>
                        <button type="submit" className="text-black bg-red-800 rounded hover:bg-yellow-300 text-white px-4 py-2">
                            Save & View Health Records
                        </button>
                    </div>

                    
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}