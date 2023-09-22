import React from 'react'
import { Link } from 'react-router-dom'

const ResoursesLN = () => {
  return (
<div className='bg-base-100 shadow-xl min-h-screen pt-16 '>
        <h3 className='text-2xl font-semibold mb-6 pt-6 text-center mx-auto'>Getting Started </h3>
        <div className='px-4 text-xl another-font'>
            <Link className='inline-block my-3' to={'/resourses'}>1.  Learn Task Manager board basis</Link>
            <Link className='inline-block my-3' to={'/resourses/create'}>2.  Create your first project</Link>
            <Link className='inline-block my-3' to={'/resourses/onboard'}>3.  Onboard your team to task manager</Link>
            <Link className='inline-block my-3' to={'/resourses/integrate'}>4.  Integrate Task Manager with other app</Link>
        </div>
    </div>

  )
}

export default ResoursesLN