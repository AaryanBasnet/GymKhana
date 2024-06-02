import React, { useContext } from 'react'
import Plus from "../../admin/adminAssets/plus.png";
import GlobalContext from '../../context/GlobalContext'

function CreateEventButton() {
    const {setShowEventModel} =useContext(GlobalContext)
  return (
    <button onClick={()=> setShowEventModel(true)} className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img src={Plus} className="w-6 h-6" />
      <span className="ml-2">Create Event</span>
    </button>
  )
}

export default CreateEventButton
