import React, { useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlobalContext from '../../context/GlobalContext'
import dayjs from "dayjs";
import Calendar from "../../admin/adminAssets/Calendar.png";

function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={Calendar} className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-grey-500 font-bold">Calendar</h1>
      <button onClick={handleReset} className="border roundd py-2 px-4 mr-5">
        Today
      </button>
      <div className="flex items-center">
      <button onClick={handlePrevMonth}>
        <span className="mx-2">
          <ChevronLeft />
        </span>
      </button>
      <h2 className="ml-1 text-xl text-gray-600 font-semibold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button onClick={handleNextMonth}>
        <span className="mx-2">
          <ChevronRight />
        </span>
      </button>
      </div>
    </header>
  );
}

export default CalendarHeader;
