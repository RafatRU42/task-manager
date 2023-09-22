import image from '../assets/images/guide1.webp'
const Onboard = () => {
    return (
        <div>

            <section>
                <h4 className='text-xl font-semibold another-font'>Chapter 3</h4>
                <h1 className='text-5xl font-semibold styled-font'>Onboard your team to Trello</h1>
                <h2 className='my-6 text-xl another-font'>Whether you're a team of ten or ten thousand, it only takes a few minutes to onboard your team members, set permissions, and start collaborating.</h2>
                <p className='text-xl'>Information can easily get lost or misinterpreted when spread over many different tools such as emails or spreadsheets. Trello helps your team focus on the work that matters with its intuitive design, features, and integrations which minimize cumbersome learning curves and hours of tedious work. With Trello you can be sure everybody is on the same page to take projects to the finish line and has the tools they need to get their work done.</p>
            </section>

            <section>
                <h4 className='text-5xl styled-font text-teal-500 mb-4'>What is a Workspace?</h4>
                <p className='text-xl mb-6'>A Workspace is your team's navigation hub, where everyone can access all the team's boards, members, and Workspace views. Within a Workspace you'll have all the context you need to productively contribute to the collective team effort.

                    Workspaces are a place where information can easily be found, shared, and collaborated on.

                    When you join Trello you are automatically added to a Workspace. In this space you can create up to 10 boards for free. To create a board within a Workspace, click on the “Create” button from the top menu in your Workspace.</p>
                <img src={image} alt="" />
            </section>

            <section>
                <h4 className='text-5xl styled-font text-teal-500 mt-10 mb-4'>Set up a few boards</h4>
                <p className='text-xl mb-6'>Getting everybody to use the same tools can be challenging, here are a few tips to help your team get onboarded to Trello seamlessly.

                    Set up Trello boards based on existing team projects and activities
                    The easiest way to onboard a teammate to Trello is to start from a context they already know. Pick an activity or a project your team is already familiar with and create a Trello board to facilitate it. Luckily, we have templates to help you get started.</p>

            </section>

        </div>
    )
}

export default Onboard