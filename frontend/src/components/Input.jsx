export default function Input({ value, placeholder, onChange }) {
  return <div>
    <label className="text-sm  text-blue-300 flex flex-start">{value}</label>
    <input
      className="
        font-[Poppins] 
        text-xs 
        text-white
        bg-transparent 
        border-b-2 border-gray-400 
        px-2 py-2 
        w-full
        placeholder-gray-400 
        focus:outline-none focus:border-blue-300 transition-colors
      "
      placeholder={placeholder}
      onChange={onChange} />
  </div>
}
