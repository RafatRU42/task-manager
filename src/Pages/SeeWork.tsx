import image from '../assets/images/TrelloBoard_Timeline_2x.webp'
import image2 from '../assets/images/TrelloBoard_Calendar_2x.webp'

const SeeWork = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 mb-20 to-blue-500'>
            <div className='text-center py-20 text-white'>
                <p className='text-4xl font-bold font-another'>See work in a whole new way</p>
                <p className='text-xl my-4'>View your team’s projects from every angle and bring a fresh perspective to <br /> the task at hand.</p>
                <button className='btn mx-auto'>Discover all Task Manager Views</button>
            </div>
            <div className='bg-white rounded-xl mx-36 flex p-10'>
                <img className=' w-1/2' src={image} alt="" />
                <div className='w-1/2 ml-10'>
                    <p className='text-xl mt-10'>HIT DEADLINES EVERY TIME</p>
                    <p className='text-xl mt-6'>From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
                    <button className='text-blue-500 underline text-xl mt-6'>Learn more about timeline view</button>
                </div>
            </div>

        
            <div className='bg-white rounded-xl -mb-36  mx-36 flex mt-10 shadow-xl p-10'>
                <div className='w-1/2 mr-10'>
                    <p className='text-xl mt-10'>HIT DEADLINES EVERY TIME</p>
                    <p className='text-xl mt-6'>From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
                    <button className='text-blue-500 underline text-xl mt-6'>Learn more about calendar view</button>
                </div>
                <img className=' w-1/2' src={image2} alt="" />
            </div>
            <p className='h-20'></p>


        </div>
    )
}

export default SeeWork