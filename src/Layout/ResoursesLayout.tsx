import React from 'react'
import Navbar from '../Pages/Navbar'
import ResoursesLN from '../Components/ResoursesLN'
import { Outlet } from 'react-router-dom'

const ResoursesLayout = () => {
  return (
    <div className='overflow-visible'>
        <Navbar></Navbar>
        <div className='flex '>
            <div className='w-1/4 '>
                <ResoursesLN></ResoursesLN>
            </div>
            <div className='w-3/4 m-20 pt-16'>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default ResoursesLayout