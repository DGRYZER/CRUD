import Homecrud from "./CRUD/Homecrud"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from "./CRUD/CreateUser"
import Users from "./CRUD/Users"
import EditUser from "./CRUD/EditUser"


const App = ()=>{
    return(
        <div>
           <BrowserRouter>
           <Homecrud/>
           <Routes>
            <Route element={<CreateUser/>} path="/"/>
            <Route element={<Users/>} path="/users"/>
            <Route element={<EditUser/>} path="/edit/:index"/>
            <Route/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App