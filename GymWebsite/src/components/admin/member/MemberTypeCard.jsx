import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function MemberTypeCard() {
  const { membersType } = useContext(GlobalContext);

  return (
    <div className="ms-10 me-10 grid sm:grid-cols md:grid-cols-3 lg:grid-cols-3 gap-20 m-4 ">
      {Object.entries(membersType).map(([type, count]) => (
        <div
          key={type}
          className="flex flex-col justify-around w-full md:w-auto h-40 bg-white dark:bg-slate-600/50 p-4 rounded-md"
        >
          <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400">
            {type.charAt(0).toUpperCase() + type.slice(1)} Members
          </div>
          <div className="text-indigo-950 dark:text-slate-400 text-2xl sm:text-xl lg:text-3xl font-semibold">
            {count}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemberTypeCard;
