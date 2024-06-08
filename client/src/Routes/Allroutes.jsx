import { Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Dashboard from "../pages/Dashboard"
import PrivateRoute from "./PrivateRoute"

 const Allroutes = ()=>{
    return(
        <Routes>
         <Route path="/" element={<SignUp/>} />
         <Route path="/signin" element={<SignIn/>} />
         <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Routes>
    )
}
export default Allroutes
