import { useState } from 'react'
import Sidebar from './components/admin/sidebar/Sidebar'
import Main from './components/admin/main/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

function App() {


  return (
    <>
    <Router>
    <div className="flex h-screen bg-white dark:bg-zinc-200">

    {/* set its width to 10% of its containing element's width, increasing to 15% on screens wider than 640px. */}
      <section className="w-[10%] sm:w-[15%]">
        <Sidebar />

      </section>
      <section className="flex flex-col w-[90%] sm:w-[85%] overflow-auto">
        <Main />

        </section>
    </div>
    </Router>

      
    </>
  )
}

export default App
