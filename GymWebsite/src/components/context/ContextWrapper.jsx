import React, { useEffect, useReducer, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "./GlobalContext";

// function saveEventsReducer(state, { type, payload }) {
//   switch (type) {
//     case "INIT_EVENTS":
//       return Array.isArray(payload) ? payload : [];
//     case "ADD_EVENT":
//       return [...state, payload];
//     case "UPDATE_EVENT":
//       return state.map((event) => (event.id === payload.id ? payload : event));
//     case "DELETE_EVENT":
//       return state.filter((event) => event.id !== payload.id);
//     default:
//       throw new Error("Unhandled action type: " + type);
//   }
// }
const saveEventsReducer = (state, action) => {
    switch (action.type) {
      case 'SET_EVENTS':
        return action.payload;
      case 'ADD_EVENT':
        return [...state, action.payload];
      case 'UPDATE_EVENT':
        return state.map(evt => (evt.id === action.payload.id ? action.payload : evt));
      case 'DELETE_EVENT':
        return state.filter(evt => evt.id !== action.payload.id);
      default:
        return state;
    }
  };

  

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return Array.isArray(parsedEvents) ? parsedEvents : [];
}

function ContextWrapper({ children }) {
  const [daySelected, setDaySelected] = useState(dayjs());
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModel, setShowEventModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(
    saveEventsReducer,
    [],
    initEvents
  );
  const [membersType, setMembersType] = useState({
    basic: 0,
    premium: 0,
    standard: 0
});
useEffect(() => {
    const fetchMembers = async () => {
        try {
            const [basicRes, premiumRes, standardRes] = await Promise.all([
                fetch("http://localhost:8080/members/count/basic"),
                fetch("http://localhost:8080/members/count/premium"),
                fetch("http://localhost:8080/members/count/standard"),
            ]);

            const [basic, premium, standard] = await Promise.all([
                basicRes.json(),
                premiumRes.json(),
                standardRes.json()
            ]);

            setMembersType({
                basic: basic.data,
                premium: premium.data,
                standard: standard.data
            });
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    };
    fetchMembers();
}, []);


  // Fetch events from backend and initialize state
  useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:8080/events");
            const data = await response.json();
            dispatchCalEvent({ type: "SET_EVENTS", payload: data });
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };
    fetchEvents();
}, []);

  // Sync local storage with saved events
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  // Clear selected event when model is closed
  useEffect(() => {
    if (!showEventModel) {
      setSelectedEvent(null);
    }
  }, [showEventModel]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showEventModel,
        setShowEventModel,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        membersType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
