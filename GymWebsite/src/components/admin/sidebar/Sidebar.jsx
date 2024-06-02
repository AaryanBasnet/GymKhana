import React from "react";
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
    <div className="h-screen  bg-indigo-600 dark:bg-slate-100">

      <div className="flex flex-col gap-3 w- full text-slate-300 h-full justify-between">
        <div className="flex flex-col gap-10 px-4 mt-4">
          <div className="flex items-center justify-center gap-3">
            <div className="block md:hidden">
              {" "}
              {/* Show on mobile, hide on desktop */}
              <img src={Dumbbell} alt="Dumbbell" />
            </div>
            <div className="hidden md:block w-32 h-auto md:w-48' ">
              {" "}
              {/* Show on desktop, hide on mobile */}
              <img src={Logo} alt="Logo" className="" />
            </div>
          </div>
          <div className="flex  flex-col  gap-5 text-md sm:text-sm lg:text-lg ">
            <span className="flex items-center gap-3">
              <span>
                <RiDashboardFill />
              </span>

              {/* hides on mobile */}
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Dashboard
              </span>
            </span>
            <span className="flex items-center gap-3">
              <span>
                <MdPeopleAlt />
              </span>

              {/* hides on mobile */}
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Members
              </span>
            </span>
            <span className="flex items-center gap-3">
              <span>
                <GrTransaction />
              </span>

              {/* hides on mobile */}
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Transaction
              </span>
            </span>
            <span className="flex items-center gap-3">
              <span>
               <GiStrong />
              </span>

              {/* hides on mobile */}
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Trainers
              </span>
            </span>
            <span className="flex items-center gap-3">
              <span>
                <FaCalendarDays />
              </span>

              {/* hides on mobile */}
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Events
              </span>
            </span>
            <span className="flex items-center gap-3">
              <span>
              <MdAnalytics />
              </span>

              {/* hides on mobile */}
              <span className="hidden sm:flex text-slate-600 hover:text-slate-400 cursor-pointer">
                Analytics
              </span>
            </span>
            
           
            
          </div>
        </div>

        <div className="flex items-center text-md text-slate-600 hover:text-slate-400 sm:text-xs md:text-sm lg:text-lg px-4 mb-4 gap-3">
            <span>
              <IoLogOut />
            </span>
          
            <span className="hidden sm:flex ">
              Logout
              </span>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
