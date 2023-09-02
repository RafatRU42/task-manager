import Sidebar from '../Pages/Sidebar'
import { Outlet } from 'react-router-dom'

const TaskLayout = () => {
  return (
    <div className="flex">
      <div className="w-[80px]">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default TaskLayout