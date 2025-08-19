import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Alluser from "./pages/All"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import Fail from "./pages/fail"
import Success from "./pages/success"


function App() {
 

  return (
    <div>
      <BrowserRouter>
       <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/allusers" element={<Alluser />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/success" element={<Success></Success>}></Route>
      <Route path="/fail" element={<Fail></Fail>}></Route>
   
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
