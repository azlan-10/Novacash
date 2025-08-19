
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import axios from "axios";
import { useState } from "react";

export default function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
       localStorage.setItem("senderName", response.data.firstname);

        navigate("/allusers?firstname=" + firstname);
    } catch (err) {
      console.error("Signin failed:", err.response?.data || err.message);
      alert("Signin failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-[#060606] min-h-screen">
      <Navbar />
      <div className="flex justify-center items-start py-12 px-4 text-center">
        <div className="bg-white/5 hover:bg-white/10 border relative border-white/10 rounded-lg text-blue-300 font-[Poppins] text-xs sm:text-sm md:text-base w-full max-w-md p-6 sm:p-8 md:p-10 transition-colors duration-300">
          <div
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer"
          >
            ❌
          </div>

          <Title value="Signin" />

          <div className="flex flex-col gap-10 mt-6">
            <Input
              onChange={(e) => setUsername(e.target.value)}
              value={"Username"}
              placeholder="Enter the username"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={'Password'}
              type="password"
              placeholder="Enter the password"
            />
          </div>

          <div className="mt-6">
            <Button onClick={handleSignin} value="Signin" />
          </div>
        </div>
      </div>
    </div>
  );
}
