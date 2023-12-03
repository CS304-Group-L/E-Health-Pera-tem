import React, { useMemo } from "react";
import { useState } from 'react';
import { useTable , useSortBy} from "react-table";
import { useGlobalFilter} from "react-table";
import { Columns } from "./Clolumns";
import ListOfLabReports from './ListOfLabReports.json';
import { SearchLabTest } from "./SearchLabTset";

export const LabReportTable = ()=>{

    const [draggedItem,setDraggedItem] = useState(null);
    const [textBoxValue,setTextBoxValue] = useState('');

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

        <div className="table-auto border-collapse p-5 ">
            <div className="grid grid-cols-2 gap-50 table-auto border-collapse">
            <div className="border">
            <SearchLabTest filter={globalFilter} setFilter={setGlobalFilter}/>
            <table{...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column)=>(
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                            {column.render('Header')}
                                            <span className="p-3 bg-blue-200 right-0 ml-10">
                                                {column.isSorted ? (column.isSortedDesc ? ' Des' :  ' Ase'): 'For Sort'}
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
                <div className="center p-20 border w-full">
                    <label className="">
                        Test Name: 
                    </label>
                <input
        type="text"
        value={textBoxValue}
        onChange={handleTextBoxChange}
        placeholder="Drop values here"
        className="border w-3/4 m-5 center"
      />
                </div>

            </div>
            
        </div>
    )
}