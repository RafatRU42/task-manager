import TextBanner from '../Components/TextBanner'
import ActionCardLI from '../Components/ActionCards/ActionCardLI'
import image0 from '../assets/images/Card4_2x.webp'
import {useState} from 'react'
import image1 from '../assets/images/flow image2.jpg'
import image2 from '../assets/images/flow image.jpg'
import image3 from '../assets/images/flow image3.jpg'
import image4 from '../assets/images/visulize image.webp'
import ActionCardRI from '../Components/ActionCards/ActionCardRI'
import image5 from '../assets/images/Power-Ups.svg'
import image6 from '../assets/images/move.webp'

const Marketing = () => {

    const [firstCard, setFirstCard] = useState<boolean>(true)
    const [secondCard, setSecondCard] = useState<boolean>(false)
    const [thirdCard, setThirdCard] = useState<boolean>(false)

    const bannerInfo={
        heading:'Trello For Marketing Teams',
        text:'Whether launching a new product, campaign, or creating content, experience how Trello helps marketing teams around the world organize, plan, and get more done.',
        bgColor:' bg-gradient-to-b from-sky-400 to-cyan-200',
        buttonText:'Go back to team solution'
    }

    const cardInfo={
        text:'Trello’s boards, lists, and cards enable teams to go from ideas to action in seconds. Visual and easy-to-use, Trello helps teams bring projects to life and keep them moving forward.',
        title:'Scale any business',
        buttonText:'Sign up- it is free!',
        image:image0,
        id:1
    }

    const actionCard={
        id:1,
        title:'Visualize your work from the right angle.',
        text:'Power your Marketing team with Calendar View and ensure campaign launches are cool, calm, and collected—instead of chaotic.',
        buttonText:'Learn more about Trello views',
        image:image4
    }
    const actionCard2={
        id:2,
        title:'Power-Up Your Marketing Team’s Productivity.',
        text:'Simple, adaptable, customizable. Make Trello your marketing hub with Power-Ups. Connect your favorite apps and integrations to Trello and gather all of the information you need to get things done under one roof.',
        buttonText:'Explore 150+ Power-Ups',
        image:image5
    }
    const actionCard3={
        id:3,
        title:'Move Work Forward, Auto-magically',
        text:'Trello’s built-in automation makes it easy to automate the repetitive, everyday tasks that keep your team from focusing on the work that matters most.',
        buttonText:'Let the robots do the work',
        image:image6
    }
  return (
    <div>
        {/* Banner Section */}
        <section>
            <TextBanner info={bannerInfo}></TextBanner>
        </section>
        
        {/* Section 2 */}
        <section>
            <ActionCardLI info={cardInfo}></ActionCardLI>
        </section>

        {/* section 3 */}
        <section className=' mb-10'>

        <div className='text-center my-10'>
            <h1 className='text-4xl font-semibold'>Your team’s workspace for marketing success</h1>
            <h4 className='text-2xl my-2'>All marketers have one thing in common: they wear a lot of (unique) hats. <br /> Organize all of your marketing processes, projects, and initiatives in one <br /> place with Trello.</h4>
            <button className='btn btn-link text-info text-xl mx-auto'>See all of our Marketing templates</button>

        </div>

        <div className='flex'>
                <div className='w-1/3 ml-20 -mt-10'>

                    <div className='grid grid-cols-1 '>

                        {/* First Card */}

                        <div onClick={()=> {setFirstCard(true);  setSecondCard(false);  setThirdCard(false);}} className='group my-2 cursor-pointer'>
                            <div className="rounded bg-base-100 shadow-xl group-hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title">GO-TO-MARKET CAMPAIGNS</h2>
                                    <p className='justify-start'>Seamlessly coordinate cross-team, go-to-market brand and product launches with a single Trello board, and ditch the browser tab tango of trying to collaborate across multiple apps.</p>
                                   
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}

                        <div onClick={() =>{setFirstCard(false) ; setSecondCard(true) ; setThirdCard(false);}} className='group my-2 cursor-pointer'>
                            <div className="rounded bg-base-100 shadow-xl group-hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title">EDITORIAL CALENDAR</h2>
                                    <p className='justify-start'>Seamlessly coordinate content creation, editing, and production with the entire team, while keeping an eye on the publishing calendar and distribution strategy.</p>
                                  
                                </div>
                            </div>
                        </div>

                        {/* Third Card */}

                        <div onClick={()=> {setThirdCard(true) ; setFirstCard(false) ; setSecondCard(false);}} className='group my-2 cursor-pointer'>
                            <div className="rounded bg-base-100 shadow-xl group-hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title">EMAIL WORKFLOW</h2>
                                    <p className='justify-start'>There’s one secret to keeping the moving pieces together: a bulletproof process with seamless cross-team collaboration. Litmus shares their workflow for email marketing success.</p>
                                   
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

                <div className='w-2/3'>
                    {firstCard && <div><img className='ml-14 h-[500px]' src={image1} alt="" /></div>}
                    {secondCard && <div><img className='ml-14 h-[500px]' src={image2} alt="" /></div>}
                    {thirdCard && <div><img className='ml-14 h-[500px]' src={image3} alt="" /></div>}
                </div>
            </div>
        </section>

        {/* Section 3 */}
        <section>
            <ActionCardRI info={actionCard}></ActionCardRI>
            <ActionCardLI info={actionCard2}></ActionCardLI>
            <ActionCardRI info={actionCard3}></ActionCardRI>
        </section>
    </div>
  )
}

export default Marketing