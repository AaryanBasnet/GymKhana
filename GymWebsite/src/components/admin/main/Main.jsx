import React from "react";

import { FaMoneyBillTransfer } from "react-icons/fa6";

import { IoIosPeople } from "react-icons/io";

function Main() {
  return (
    <div className="flex flex-col md:flex-row bg-indigo-50 dark:bg-slate-900">
      <section className="mt-3 mb-3 w-auto md:w-[70%] h-full ">
        <form className="max-w-md mx-12 ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Members, Trainers..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className=" grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-7 m-4 ">
          <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-600/50 p-4 rounded-md ">
            <div className="flex w-full items-center justify-between">
              <div className="text-4xl text-indigo-950 dark:text-slate-400/20">
                <FaMoneyBillTransfer />

              </div>
              <div>
                test
              </div>
              

            </div>
            <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400">
                Total sales

              </div>
              <div className="text-indigo-950 dark:text-slate-400 text-2xl sm:text-xl lg:text-3xl font-semibold">
              Nrs.1,20,000
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-600/50 p-4 rounded-md ">
            <div className="flex w-full items-center justify-between">
              <div className="text-4xl text-indigo-950 dark:text-slate-400/20">
                <IoIosPeople />

              </div>
              <div>
                test
              </div>
              

            </div>
            <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400">
                Total Members

              </div>
              <div className="text-indigo-950 dark:text-slate-400 text-2xl sm:text-xl lg:text-4xl font-semibold">
              300
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-600/50 p-4 rounded-md ">
            <div className="flex w-full items-center justify-between">
              <div className="text-4xl text-indigo-950 dark:text-slate-400/20">
                <FaMoneyBillTransfer />

              </div>
              <div>
                test
              </div>
              

            </div>
            <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400">
                Total sales

              </div>
              <div className="text-indigo-950 dark:text-slate-400 text-2xl sm:text-xl lg:text-3xl font-semibold">
              Nrs.1,20,000
              </div>
            </div>
          
          

        </div>
        <div className="mt-3 mb-3 w-auto md:w-[70%] h-full ">
          <div className="bg-white dark:bg-slate-400/50 rounded-md">
            what
            

          </div>

        </div>
      </section>
      <section className="w-full md:w-[30%] bg-indigo-100 dark:bg-slate-950/20">
        2
      </section>
    </div>
  );
}

export default Main;
