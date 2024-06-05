import React, { useEffect, useContext, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from '../../context/GlobalContext'


function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModel, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YYYY") === day.format("DD-MM-YYYY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")
      ? "bg-blue-600 text-black rounded-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModel(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
