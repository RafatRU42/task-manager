import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home'
import Navbar from '../Pages/Navbar'
import TaskDashboard from '../TaskDashboard/TaskDashbord'
import TaskLayout from '../Layout/TaskLayout'

export const router = createBrowserRouter([
    {path:'/', element:<MainLayout></MainLayout>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/navbar',element:<Navbar/>},
        // {path:'/task',element:<Task></Task>}
    ]},

    // Task layout =>

    {path:'/taskDashboard',element:<TaskLayout></TaskLayout>,children:[
    {path:'/taskDashboard', element:<TaskDashboard></TaskDashboard>}

    ]}
])
