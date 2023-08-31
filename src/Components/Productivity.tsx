import React from 'react'


export interface CardInfo {
    id: number,
    title: string,
    description: string
}

const Productivity = () => {
    const cardInfo: CardInfo[] = [
        {
            id: 1,
            title: 'Boards',
            description: 'Whatever the project or process, boards keep tasks organized and work moving forward. In a glance you can see everything from "things to do" to "aww yeah we did it!"'

        },
        {
            id: 2,
            title: 'Lists',
            description: 'The different stages of tasks start as simple as to do, doing or done- or build a workflow custom to your teams need. There is no wrong way to Task Master'
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
                <div className='w-1/3 ml-32'>

                    <div className='grid grid-cols-1'>
                        {
                            cardInfo.map(card => <div>

                                <div className='group my-2 cursor-pointer'>
                                    <div className="rounded bg-base-100 shadow-xl group-hover:scale-110 duration-300">
                                        <div className="card-body">
                                            <h2 className="card-title">{card.title}</h2>
                                            <p className='justify-start'>{card.description}</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>)
                        }
                    </div>



                </div>

                <div className='w-2/3'>

                </div>
            </div>
        </div>
    )
}

export default Productivity