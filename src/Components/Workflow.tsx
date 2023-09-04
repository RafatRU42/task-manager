import WorkflowCard from './WorkflowCard'
import ScrollCarousel from 'scroll-carousel-react'

const Workflow = () => {

    const cardInfo = [
        {
            id: 1,
            name: 'Project Management',
            description: 'From initiation to completion, Trello makes it easy to monitor every aspect of your next project.',
            color: 'bg-warning'
        },
        {
            id: 2,
            name: 'Meetings',
            description: 'Meetings should be productive, but done right, they can also boost team morale.',
            color: 'bg-success'
        },
        {
            id: 3,
            name: 'Onboarding',
            description: 'Simplify the ramp-up process with a vibrant, visual layout that keeps everything organized.',
            color: 'bg-info'
        },
        {
            id: 4,
            name: 'Task Management',
            description: 'Say goodbye to sticky notes and to-do lists: Trello allows teams of any size.',
            color: 'bg-error'
        },
        {
            id: 5,
            name: 'Brainstorming',
            description: 'A productive brainstorm helps your team identify innovative ideas and make decisions.',
            color: 'bg-primary'
        },
        {
            id: 6,
            name: 'Resource hub',
            description: 'Knowledge is power – but only if it’s accurate, accessible, and used correctly.',
            color: 'bg-secondary'
        }
    ]


    return (
        <div className='ml-20 mt-10'>
            <div>
                <p className='text-xl'>TRELLO IN ACTION</p>
                <p className='text-5xl another-font font-semibold my-6'>Workflows for any project, big or small</p>
            </div>
            <div className='flex mt-10'>
                <ScrollCarousel
                autoplay={true}
                autoplaySpeed={5}
                speed={10}
                onReady={() => console.log('I am ready')}
                >
                    {
                        cardInfo.map(info => <WorkflowCard key={info.id} info={info}></WorkflowCard>)
                    }
                </ScrollCarousel>
            </div>

            <div className='my-20 mr-10 flex'>
                <p className='text-xl  font-another w-2/3'>No need to start from scratch. Jump-start your workflow with a proven playbook <br /> designed for different teams. Customize it to make it yours.</p>
                <button className='w-1/3 btn btn-outline btn-success mr-10'>Explore all Use Cases</button>
            </div>
        </div>
    )
}

export default Workflow