import Banner from '../Components/Banner'
import Productivity from '../Components/Productivity'
import Workflow from '../Components/Workflow'
import SeeWork from './SeeWork'
import DoMore from './DoMore'
import Price from './Price'

const Home = () => {
  return (
    <div className=''>
      
      <Banner></Banner>
      <Productivity></Productivity>
      <Workflow></Workflow>
      <SeeWork></SeeWork>
      <DoMore></DoMore>
      <Price></Price>

    </div>
  )
}

export default Home