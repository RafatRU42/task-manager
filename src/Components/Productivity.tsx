import React from 'react'
import { useState } from 'react'
import image from '../assets/images/aPb1faCeYIzwD1vrFhn319LGKXQ.webp'
import image2 from '../assets/images/download.jpg'
import image3 from '../assets/images/download (1).jpg'


export interface CardInfo {
    id: number,
    title: string,
    description: string
}

const Productivity = () => {

    const [firstCard, setFirstCard] = useState(true)
    const [secondCard, setSecondCard] = useState(false)
    const [thirdCard, setThirdCard] = useState(false)


    const cardInfo: CardInfo[] = [
        {
            id: 1,
            title: 'Boards',
            description: ''

        },
        {
            id: 2,
            title: 'Lists',
            description: ''
        },
        {
            id: 3,
            title: 'Cards',
            description: 'Whatever the project or process, boards keep tasks organized and work moving forward. In a glance you can see everything from "things to do" to "aww yeah we did it!"'
        }
    ]




    return (
        <div className=''>

            <div className='m-20 another-font'>
                <h4>Task Manager 101</h4>
                <h1 className='text-5xl mt-5'>A productivity powerhouse</h1>
                <h3 className='text-xl mt-5'>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s <br /> doing what and what needs to get done. Learn more in our guide for getting started.</h3>
            </div>
            <div className='flex'>
                <div className='w-1/3 ml-32 -mt-10'>

                    <div className='grid grid-cols-1 '>

                        {/* First Card */}

                        <div onClick={()=> setFirstCard(true) & setSecondCard(false) & setThirdCard(false)} className='group my-2 cursor-pointer'>
                            <div className="rounded bg-base-100 shadow-xl group-hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title">Boards</h2>
                                    <p className='justify-start'>Whatever the project or process, boards keep tasks organized and work moving forward. In a glance you can see everything from "things to do" to "aww yeah we did it!"</p>
                                   
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}

                        <div onClick={() =>setFirstCard(false) & setSecondCard(true) & setThirdCard(false)} className='group my-2 cursor-pointer'>
                            <div className="rounded bg-base-100 shadow-xl group-hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title">Lists</h2>
                                    <p className='justify-start'>The different stages of tasks start as simple as to do, doing or done- or build a workflow custom to your teams need. There is no wrong way to Task Master</p>
                                  
                                </div>
                            </div>
                        </div>

                        {/* Third Card */}

                        <div onClick={()=> setThirdCard(true) & setFirstCard(false) & setSecondCard(false)} className='group my-2 cursor-pointer'>
                            <div className="rounded bg-base-100 shadow-xl group-hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title">Cards</h2>
                                    <p className='justify-start'>Whatever the project or process, boards keep tasks organized and work moving forward. In a glance you can see everything from "things to do" to "aww yeah we did it!"</p>
                                   
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

                <div className='w-2/3'>
                    {firstCard && <div><img className='ml-14 h-[500px]' src={image} alt="" /></div>}
                    {secondCard && <div><img className='ml-14 h-[500px]' src={image2} alt="" /></div>}
                    {thirdCard && <div><img className='ml-14 h-[500px]' src={image3} alt="" /></div>}
                </div>
            </div>
        </div>
    )
}

export default Productivity