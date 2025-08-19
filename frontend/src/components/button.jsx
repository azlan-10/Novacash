
export default function Button({value , onClick}){
return <div onClick={onClick} className="mt-5 font-[Poppins] hover:bg-blue-400 rounded-lg p-4 transition-colors duration-300 bg-blue-300 text-gray-900 cursor-pointer">
    {value} 
</div>
}