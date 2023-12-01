import React from 'react'

export const SearchLabTest=({filter,setFilter})=>{
    return(

        <div>
        <sapn>
            Search Lab Report : {' '}
            <input value={filter || ''} onChange={(e)=> setFilter(e.target.value)} className="p-3 m-5 border"/>
        </sapn>

        </div>
    );
}