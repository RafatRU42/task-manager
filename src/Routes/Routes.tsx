import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home'
import Navbar from '../Pages/Navbar'
import Task from '../Pages/Task'

export const router = createBrowserRouter([
    {path:'/', element:<MainLayout></MainLayout>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/navbar',element:<Navbar/>},
        {path:'/task',element:<Task></Task>}
    ]}
])
