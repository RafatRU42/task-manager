import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import TaskLayout from "./Layout/TaskLayout"
import TaskDashboard from "./TaskDashboard/TaskDashbord"
import Automate from "./Pages/Automate"





function App() {

  return (
    <div>
       <BrowserRouter>
          <Routes>
            {/* Main Layout */}
            <Route path='/' element= {<MainLayout></MainLayout>}>

              <Route index element={<Home></Home>}/>
              <Route path="navbar" element={<Navbar></Navbar>} />
              <Route path="automate" element={<Automate></Automate>} />
              
            </Route>

            {/* Task Layout */}
            <Route path="taskDashboard" element={<TaskLayout></TaskLayout>}>
              <Route index element={<TaskDashboard></TaskDashboard>} />
            </Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
