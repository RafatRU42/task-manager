import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='pt-16'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout