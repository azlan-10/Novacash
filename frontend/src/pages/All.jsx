import Appbar from "../components/all1";
import Appbar2 from "../components/all2";
import Search from "../components/Searchbar";
import Users from "../components/Users";
import { useState} from "react";

 
 export default function Alluser () {
     const [filter, setFilter] = useState("");
    return <div className="bg-[#060606] min-h-screen w-full">
    <Appbar2></Appbar2>
   <Appbar></Appbar>
   <Search setFilter={setFilter}></Search>
   <Users filter={filter}></Users>
   </div>
   
}
