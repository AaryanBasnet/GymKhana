import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import SearchButton from "./SearchButton";
import GlobalContext from "../../context/GlobalContext";
import { useContext } from "react";
import MemberTypeCard from "./MemberTypeCard";
import MembersTable from "./MembersTable";

function Member() {
  const [members, setMembers] = useState([]);
  const { membersType } = useContext(GlobalContext);

  // useEffect(() => {
  //   const fetchMembers = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/members/get");
  //       console.log("Data fetched:", response.data.data);
  //       setMembers(response?.data?.data || []);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // If there's an error, set members as an empty array
  //       setMembers([]);
  //     }
  //   };

  //   fetchMembers();
  // }, []);

  return (
    <>
      <div className="flex flex-col md:flex-col bg-indigo-50 dark:bg-slate-900">
        <div className="flex md:flex-row w-full justify-between">
          <SearchButton />

          <div className="mt-5 mb-4 me-10">
            <button className="bg-indigo-500  text-white px-3 py-1 rounded-md">
              Add Member
            </button>
          </div>
        </div>
        
        <MemberTypeCard />
        <MembersTable />

      </div>
    </>
  );
}

export default Member;
