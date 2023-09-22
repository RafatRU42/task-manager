import image from '../assets/images/banner.webp'
const Banner = () => {
    return (
        <div>
            <div className='h-[70vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex'>
                <div className='w-1/2'>
                    <h1 className='text-white font-bold another-font text-5xl m-20'>Task Manager brings all your tasks, teammates, and tools together.</h1>
                    <h3 className='text-2xl semibold text-white mx-20 -mt-10'>Keep everything in the same place—even if your team isn’t.</h3>
                    <button className='btn btn-success mx-20 mt-10 btn-outline'>Sign Up for free!</button>

                </div>
                <div className='w-1/2'>
                    <img className='h-[95%]' src={image} alt="" />
                    {/* "https://i.ibb.co/p3L9dbw/business-man-working-on-computer-at-office-desk-vector-14995840-removebg-preview.png" */}

                </div>
            </div>
        </div>
    )
}

export default Banner