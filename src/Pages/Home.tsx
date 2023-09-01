import React from 'react'
import Banner from '../Components/Banner'
import Productivity from '../Components/Productivity'
import Workflow from '../Components/Workflow'
import SeeWork from './SeeWork'
import DoMore from './DoMore'

const Home = () => {
  return (
    <div className=''>
      
      <Banner></Banner>
      <Productivity></Productivity>
      <Workflow></Workflow>
      <SeeWork></SeeWork>
      <DoMore></DoMore>

    </div>
  )
}

export default Home