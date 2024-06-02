import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getMonth } from "../main/util";

import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import GlobalContext from '../../context/GlobalContext'
import { useContext } from 'react';

function SmallCalendar() {
    const[currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    const {setDaySelected, daySelected} = useContext(GlobalContext)

    useEffect(()=>{ setCurrentMonth(getMonth(currentMonthIdx)) }, [currentMonthIdx])
    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
      }
        function handleNextMonth() {
            setCurrentMonthIdx(currentMonthIdx + 1);
        }
    function getDayclass(day){
        const format = 'DD-MM-YYYY'
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if (nowDay=== currDay){
            return 'bg-blue-500 text-white'
        }else if (currDay === slcDay){
            return 'bg-blue-100 text-blue-600 font-semibold'

        }else{
            return"";
        }
    
        
    }
  return (
    <div className="mt-9">
        <header className="flex justify-between" >
            <p className="text-gray-500 font-semibold">
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
            </p>
            <div>
            <button onClick={handlePrevMonth}>
        <span className="">
          <ChevronLeft />
        </span>
      </button>
      
    
      <button onClick={handleNextMonth}>
        <span className="">
          <ChevronRight />
          </span>
        </button>
        </div>

        </header>

        <div className="grid grid-cols-7 grid-rows-6">
            {currentMonth[0].map((day, i)=>(  
                <span key={i} className="text-sm py-1 text-center">
                    {day.format("dd").charAt(0)}
                </span>
                ))}
                {currentMonth.map((row, i)=>(
                <React.Fragment key ={i}>
                    {row.map((day, idx)=>(
                        <button key={idx} 
                        onClick={()=>{setDaySelected(day)}}
                        className={`py-1 w-full ${getDayclass(day)}` }>
                            <span className="text-sm">{day.format('D')}</span>
                        </button>
                    ))}
                        
                </React.Fragment>
            ))}   

        </div>
      
    </div>
  )
}

export default SmallCalendar
