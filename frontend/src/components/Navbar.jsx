import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

const handledemosignin = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/user/demo");
    const token = response.data.token;
    localStorage.setItem("token" , token)
     localStorage.setItem("senderName", response.data.firstname);

    navigate('/allusers?firstname=' + response.data.firstname)
  } catch (error) {
    console.error("Signin failed:", err.response?.data || err.message);
      alert("Signin failed..");
    
  }
}


  return (
    <div className="flex justify-between items-center h-16 w-full px-2 sm:px-4 md:px-6 text-white bg-black shadow-lg">
      
      <div className="font-bold tracking-wide text-blue-400 text-lg sm:text-xl md:text-2xl">
        Nova-Cash
      </div>
 <div className="flex items-center gap-1 sm:gap-3 md:gap-6">
        <div onClick={handledemosignin} className="px-2 sm:px-3 md:px-4 py-1 md:py-2 text-blue-300 text-xs sm:text-sm hover:text-blue-400 rounded-lg font-[Poppins] transition-colors duration-300 bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer">
          Demo
        </div>
        <div className="px-2 sm:px-3 md:px-4 py-1 md:py-2 text-blue-300 text-xs sm:text-sm hover:text-blue-400 rounded-lg font-[Poppins] transition-colors duration-300 bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
        onClick={() => navigate("/signup")}
        >
          Signup
        </div>
        <div className="px-2 sm:px-3 md:px-4 py-1 md:py-2 text-blue-300 text-xs sm:text-sm  hover:text-blue-400 rounded-lg font-[Poppins] transition-colors duration-300 bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
    onClick={() => navigate("/signin")}
        >
          Signin
        </div>
      </div>
    </div>
  );
}
