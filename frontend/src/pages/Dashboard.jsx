import { useState } from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom'
import axios from "axios";




export default function Dashboard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name')
  const[amount,setAmount] = useState(0);
  const [loading,setLoading] = useState(false)
  const numericAmount = parseFloat(amount);
  const sendername = localStorage.getItem("senderName")
  

const handletransfer = async () => {
  setLoading(true);
  try {
    const res = await axios.post(
      'https://api-nova-cash.onrender.com/api/v1/account/transfer',
      { to: id, amount: numericAmount },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    setLoading(false);

    
    navigate('/success');
    setTimeout(() => {
      navigate('/allusers?firstname=' + sendername);
    }, 6000);

  } catch (err) {
    setLoading(false);

   
    navigate('/fail');
    setTimeout(() => {
      navigate('/allusers?firstname=' + sendername);
    }, 6000);
  }
};


  return (
    <div>
     
      <div className="flex justify-center items-center h-16 w-full px-2 sm:px-4 md:px-6 text-white bg-black shadow-lg">
        <div className="font-bold tracking-wide text-blue-400 text-2xl sm:text-2xl md:text-4xl">
          Nova-Cash
        </div>
      </div>

   
      <div className="bg-[#060606] min-h-screen flex justify-center pt-16 sm:pt-24 overflow-hidden">
        
        <div className="w-80 h-[440px] sm:h-[470px] hover:bg-white/10 bg-white/5 border border-gray-500 rounded-2xl p-6 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105">

      
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-center bg-white/10 shadow-md">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-bold">
                NC
              </span>
            </div>
            <div className="pl-6 bg-gradient-to-r text-3xl from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold tracking-wide">
              Novacash
            </div>
          </div>

          <div className="border-b border-gray-500 mb-6 w-full"></div>

         
          <div className="mb-6 flex justify-center">
            <span
              className="px-5 py-2 sm:px-7 sm:py-3 sm:text-lg rounded-full 
              bg-white/10 text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
              bg-clip-text font-bold border border-blue-500/30 backdrop-blur-sm 
              drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]"
            >
              To: {name}
            </span>
          </div>

          
          <div>
            <label className="text-blue-400 block mb-2 text-lg sm:text-xl font-medium">
              Amount (in ₹)
            </label>
            <input onChange={(e) => {setAmount(e.target.value)}}
              className="font-[Poppins] text-sm rounded-xl sm:p-3 
              text-white bg-transparent border border-blue-400 px-4 py-2 w-full 
              placeholder-gray-400 focus:outline-none focus:ring-2 
              focus:ring-blue-400 focus:border-blue-300 transition"
              placeholder="Enter amount"
            />
          </div>


          <div
          onClick={handletransfer}
            className="mt-6 text-center font-[Poppins] rounded-xl py-3 cursor-pointer 
            text-white bg-gradient-to-r from-blue-500 to-blue-700 
            transition duration-300 hover:from-blue-400 hover:to-blue-600 
            shadow-md hover:shadow-blue-500/40"
          >
            Initiate Transfer
        </div>
{loading && (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
   
    <div className="w-14 h-14 border-4 border-blue-400/60 border-t-blue-500 rounded-full animate-spin mb-4"></div>

   
    <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-4 text-center backdrop-blur-md shadow-xl w-72">
      <div className="text-blue-400 font-bold text-lg sm:text-xl mb-1">
        💸 Sending Money
      </div>
      <div className="text-white text-sm sm:text-base">
        Sending ₹{amount} to <span className="font-semibold text-blue-400">{name}</span>...
      </div>
    </div>
  </div>
)}
       
       
         <div
  className=" mt-6 sm:mt-6 sm:text-center sm:font-[Poppins] 
  sm:inline-block px-6 py-2 rounded-full
  text-blue-500 border border-blue-500/40 bg-blue-500/10
  backdrop-blur-sm shadow-md
  animate-pulse"
>
  💸 Sending ₹{amount} to {name}...
</div>
        </div>
      </div>
    </div>
  );
}
