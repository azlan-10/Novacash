import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users({filter}) {
 const [users,setUsers] = useState([]);
   
   
useEffect(() => {
    const fetchUsers = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3000/api/v1/user/bulk?filter=" + filter,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            setUsers(res.data.user);
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    fetchUsers();
}, [filter]);
  

  return (
    <div className="w-full p-5 mx-auto mt-6 space-y-6">
{users.map(user => <Mapuser name={user} key={user._id} />)}
</div>
  );
}

function Mapuser({name}) {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-gray-800 px-5 py-4 rounded-lg shadow-md w-full">
      <div className="flex items-center space-x-3">
 <div className="w-8 h-8 flex items-center justify-center sm:w-12 sm:h-12 text-white text-lg font-bold rounded-full bg-blue-400">
         {name.firstname[0]}
        </div>
    <div className="text-white text-lg sm:text-3xl sm:pl-3 font-[Poppins] font-semibold">
         {name.firstname} {name.lastname}
        </div>
      </div>
<button onClick={() => {
  navigate('/dashboard?id=' + name._id + "&name=" + name.firstname)
}
}
        className="bg-blue-400 hover:bg-blue-500 text-gray-800 font-bold py-2 px-2 sm:px-6 sm:py-3 sm:mr-7 rounded-lg shadow-lg transition-all"
      >
        Send Money
      </button>
    </div>
  );
}
