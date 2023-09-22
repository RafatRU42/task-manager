import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import TaskLayout from "./Layout/TaskLayout"
import TaskDashboard from "./TaskDashboard/TaskDashbord"
import Automate from "./Pages/Automate"
import Views from "./Pages/Views"
import Marketing from "./Pages/Marketing"
import FirstPage from "./Pages/FirstPage"
import Learn from "./Components/Learn"
import Create from "./Components/Create"
import ResoursesLayout from "./Layout/ResoursesLayout"
import Onboard from "./Pages/Onboard"
import Integrate from "./Pages/Integrate"





function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="welcome" element={<FirstPage />}></Route>

          {/* Main Layout */}
          <Route path='/' element={<MainLayout></MainLayout>}>

            <Route index element={<Home></Home>} />
            <Route path="navbar" element={<Navbar></Navbar>} />
            <Route path="automate" element={<Automate></Automate>} />
            <Route path="views" element={<Views></Views>}></Route>
            <Route path="marketing" element={<Marketing />} />

          </Route>

          {/* Resourses Layout */}
          <Route path="resourses" element={<ResoursesLayout></ResoursesLayout>}>
            <Route index element={<Learn></Learn>} />
            <Route path="/resourses/create" element={<Create></Create>} />
            <Route path="/resourses/onboard" element={<Onboard></Onboard>} />
            <Route path="/resourses/integrate" element={<Integrate></Integrate>} />
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
