import image1 from '../assets/images/Integrations_Puzzle.svg'
import image2 from '../assets/images/Gears.svg'
import image3 from '../assets/images/Search_Value.svg'
import DoMoreCard from '../Components/DoMoreCard'


const DoMore = () => {

    const cardInfo =[
        {
            id:1,
            image:{image1},
            title:'Integrations',
            description:''
        },
        {
            id:2,
            image:{image2},
            title:'',
            description:'.'
        },
        {
            id:3,
            image:{image3},
            title:'',
            description:'.'
        },
    ]
    return (
        <div className='mt-40 ml-20 '>
            <p className='text-xl my-4'>POWERFUL WAYS TO GROW</p>
            <p className='text-5xl another-font'>Do more with Task Manager</p>
            <p className='mt-4 text-xl'>Trello’s intuitive features give any team the ability to quickly set up <br /> and customize workflows for just about anything.</p>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
        <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title another-font">Integrations</h2>
                        <p>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest</p>
                        <div className="card-actions ">
                            <button className="btn btn-outline">Browse Integragion</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title another-font">Butler Automation</h2>
                        <p>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p>
                        <div className="card-actions ">
                            <button className="btn btn-outline">Go to know Automation</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title another-font">Trello Enterprise</h2>
                        <p>The productivity tool teams love, paired with the features and security needed for scale. No-code automation is built</p>
                        <div className="card-actions flex">
                            <button className="btn btn-outline">Explore Enterprise</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          

        </div>
    )
}

export default DoMore