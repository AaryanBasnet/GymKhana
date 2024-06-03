import { useState } from "react";
import Sidebar from "./components/admin/sidebar/Sidebar";
import Main from "./components/admin/main/Main";
import Member from "./components/admin/member/Member";
import Events from "./components/admin/main/Events";
import Trainer from "./components/admin/Trainer/Trainer";
import Transaction from "./components/admin/main/Transaction";
import Analytics from "./components/admin/main/Analytics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="flex h-screen bg-white dark:bg-zinc-200">
          <section className="w-[10%] sm:w-[15%]">
            <Sidebar />
          </section>
          <section className="flex flex-col w-[90%] sm:w-[85%] overflow-auto">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/members" element={<Member />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/trainers" element={<Trainer />} />
              <Route path="/events" element={<Events />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
