import React from "react";
import { Link } from "react-router-dom";
import Dumbbell from "./Dumbbell.png";
import Logo from "./Logo.png";
import { RiDashboardFill } from "react-icons/ri";
import { MdPeopleAlt, MdAnalytics } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="h-screen bg-indigo-600 dark:bg-slate-100">
      <div className="flex flex-col gap-3 w-full text-slate-300 h-full justify-between">
        <div className="flex flex-col gap-10 px-4 mt-4">
          <div className="flex items-center justify-center gap-3">
            <div className="block md:hidden">
              <img src={Dumbbell} alt="Dumbbell" />
            </div>
            <div className="hidden md:block w-32 h-auto md:w-48">
              <img src={Logo} alt="Logo" className="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 text-md sm:text-sm lg:text-lg">
            <Link to="/" className="flex items-center gap-3">
              <RiDashboardFill />
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Dashboard
              </span>
            </Link>
            <Link to="/members" className="flex items-center gap-3">
              <MdPeopleAlt />
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Members
              </span>
            </Link>
            <Link to="/transactions" className="flex items-center gap-3">
              <GrTransaction />
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Transactions
              </span>
            </Link>
            <Link to="/trainers" className="flex items-center gap-3">
              <GiStrong />
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Trainers
              </span>
            </Link>
            <Link to="/events" className="flex items-center gap-3">
              <FaCalendarDays />
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Events
              </span>
            </Link>
            <Link to="/analytics" className="flex items-center gap-3">
              <MdAnalytics />
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Analytics
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center text-md text-slate-600 hover:text-slate-400 sm:text-xs md:text-sm lg:text-lg px-4 mb-4 gap-3">
          <IoLogOut />
          <span className="hidden sm:flex">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
