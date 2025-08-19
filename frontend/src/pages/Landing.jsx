import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import img1 from "../images/img4.webp";
import img2 from '../images/img1.svg'
import img3 from '../images/img2.svg'
import img4 from '../images/img3.svg'
import axios from "axios";


export default function Landing() {
   const navigate = useNavigate();



   
const handledemosignin = async () => {
  try {
    const response = await axios.post("https://api-nova-cash.onrender.com/api/v1/user/demo");
    const token = response.data.token;
    localStorage.setItem("token" , token)

    navigate('/allusers?firstname=' + response.data.firstname)
  } catch (error) {
    console.error("Signin failed:", err.response?.data || err.message);
      alert("Signin failed..");
    
  }
}
  
  return <div>
    <div className="bg-[#060606] overflow-x-hidden ">
      <Navbar />
<div className="flex flex-col items-center p-20 relative">
        <span className="text-blue-300 text-3xl font-semibold font-[Poppins] whitespace-nowrap">
          One Device, One App
        </span>
        <div className="text-white text-lg mt-4 font-[Poppins]">
          Any Payment Method
        </div>
       <div  onClick={handledemosignin}
      
  className="
    flex justify-center items-center text-blue-300  text-sm sm:text-xl md:text-xl px-6 py-3 sm:px-3 sm:py-2 md:px-5 md:py-2 mt-4
    hover:text-blue-400 rounded-lg sm:rounded-md md:rounded-lg font-[Poppins] transition-colors duration-300
    bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer">
  Click for Preview
</div>
   <div className="mt-12 flex flex-col items-center  justify-center relative w-full py-18">
          <div className="absolute  w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl  "></div>
          <img
            src={img1}
            alt="App preview"
            className="relative z-10 w-[300px]"
          />
        </div>
      </div>

     <div className="flex flex-wrap justify-around gap-6 px-4 sm:px-6 md:px-20">

        <div className="px-2 text-blue-300 w-80 h-[350px] hover:text-blue-400 rounded-lg font-[Poppins] transition-colors duration-300 bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer">
          <img src={img2}  alt="hello" className="h-40 mt-9 w-auto mx-auto" />
          <h2 className="mt-8 pl-2 text-3xl ">Investments</h2>
          <p className="mt-5 pl-2 text-md">Build,manage and grow your wealth</p>
        </div>
        <div className="px-2 text-blue-300 w-80 h-[350px] hover:text-blue-400 rounded-lg font-[Poppins] transition-colors duration-300 bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer">
          <img src={img3} alt="hello"  className="h-40 mt-9 w-auto mx-auto"/>
          <h2 className="mt-8 pl-2 text-3xl ">Insurance</h2>
          <p className="mt-5 pl-2 text-md">Project,plan and secure your future</p>
        </div>

      <div className="px-2 text-blue-300 w-80 h-[350px] hover:text-blue-400 rounded-lg font-[Poppins] transition-colors duration-300 bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer">
          <img src={img4} alt="hello"  className="h-40 mt-9 w-auto mx-auto"/>
          <h2 className="mt-8 pl-2 text-3xl ">Lending</h2>
          <p className="mt-5 pl-2 text-md">Access quick and secure Loans</p>
        </div>
       </div>
        <div className="h-12 md:h-20"></div>
     </div>
     </div>
}
