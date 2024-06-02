import React, { useState, useContext } from "react";
import GlobalContext from '../../context/GlobalContext'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineDragHandle, MdSchedule, MdSegment } from "react-icons/md";
import { FaRegBookmark, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const labelsClasses = ["indigo", "gray", "green", "red", "yellow", "blue"];

function EventModel() {
    const { setShowEventModel, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext);
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : " ");
    const [selectedLabel, setSelectedLabel] = useState(selectedEvent ? selectedEvent.label : labelsClasses[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : undefined,
        };

        if (selectedEvent) {
            // Update event in backend
            try {
                const response = await fetch(`http://localhost:8080/events/${selectedEvent.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(event),
                });
                if (!response.ok) {
                    throw new Error("Failed to update event");
                }
                const updatedEvent = await response.json();
                dispatchCalEvent({ type: "UPDATE_EVENT", payload: updatedEvent });
            } catch (error) {
                console.error("Error updating event:", error);
            }
        } else {
            // Save event to backend
            try {
                const response = await fetch("http://localhost:8080/events", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(event),
                });
                if (!response.ok) {
                    throw new Error("Failed to save event");
                }
                const newEvent = await response.json();
                dispatchCalEvent({ type: "ADD_EVENT", payload: newEvent });
            } catch (error) {
                console.error("Error saving event:", error);
            }
        }

        setShowEventModel(false);
    };

    const handleDelete = async (event) => {
        try {
          // Make a DELETE request to the backend to delete the event
          const response = await fetch(`http://localhost:8080/events/${event.id}`, {
            method: "DELETE",
          });
          if (!response.ok) {
            throw new Error("Failed to delete event");
          }
          // Dispatch an action to update the events in the context state
          dispatchCalEvent({ type: "DELETE_EVENT", payload: event });
          // Close the event model
          setShowEventModel(false);
        } catch (error) {
          console.error("Error deleting event:", error);
        }
      };
    

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4" onSubmit={handleSubmit}>
                <header className="bg-gray-200 rounded-t-lg p-4 flex justify-between items-center">
                    <span className="text-grey-400">
                        <MdOutlineDragHandle />
                    </span>
                    
                    <button onClick={() => setShowEventModel(false)}>
                        <span className="text-grey-400">
                            <IoIosCloseCircleOutline />
                        </span>
                    </button>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <input
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={title}
                            className="pt-3 border-0 text-gray-500 text-xl font-semibold w-full bg-transparent focus:outline-none focus:ring-0 border-b-2 border-gray-200"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span className="text-gray-400 text-sm">
                            <MdSchedule />
                        </span>
                        <p>{daySelected.format("dddd, MMMM DD")}</p>
                        <span className="text-gray-400 text-sm">
                            <MdSegment />
                        </span>
                        <input
                            type="text"
                            name="description"
                            placeholder="Add description"
                            value={description}
                            className="pt-3 border-0 text-gray-500 w-full bg-transparent focus:outline-none focus:ring-0 border-b-2 border-gray-200"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className="">
                            <FaRegBookmark />
                        </span>
                        <div className="flex gap-x-2">
                            {labelsClasses.map((label, i) => (
                                <span
                                    key={i}
                                    className={`bg-${label}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                    onClick={() => setSelectedLabel(label)}
                                >
                                    {selectedLabel === label && <FaCheck className="text-white" />}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className=" flex justify-between">
                <span onClick={() => handleDelete(selectedEvent)} className= "text-red-500  cursor-pointer">
                        <MdDelete className="w-20 h-30" />
                    </span>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2  rounded text-white">
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}

export default EventModel;
