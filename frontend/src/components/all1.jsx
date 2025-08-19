import {useSearchParams} from 'react-router-dom'
import {useState , useEffect} from "react"
import axios from "axios";


export default function Appbar() {
  const [amount , setAmount] = useState(0);
   const [searchParams] = useSearchParams();
    const name = searchParams.get("firstname")
   

 


    const getbalance = async () => {
  const res = await axios.get("https://api-nova-cash.onrender.com/api/v1/account/balance",{
      headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                  })
                  setAmount(res.data.balance)
  }

  useEffect(() => {
    getbalance()
   }, [])
  

useEffect(() => {
  if (amount>0){
alert('Your account has been credited with ' + amount.toFixed(2) + ' rupees');}
}, [amount]); 
  

  


  return (
    <div className="w-full flex justify-center mt-6 px-2">
      <div className="flex items-center space-x-4 sm:space-x-6 bg-gray-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg">
        <span className="text-lg sm:text-xl md:text-2xl text-blue-400 font-[Poppins] font-semibold">
          {name}'s balance  :
        </span>
        <span onClick={getbalance} className="text-lg sm:text-xl md:text-2xl text-blue-400 font-[Poppins] font-semibold">
        {amount.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
