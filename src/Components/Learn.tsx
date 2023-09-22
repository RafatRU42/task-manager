import image1 from '../assets/images/Chapter1.webp'
import image2 from '../assets/images/ch.png'
import image3 from '../assets/images/ch1_02.webp'
const Learn = () => {
    return (
        <div>
            <section>
                <h4 className='text-xl font-semibold another-font'>Chapter 1</h4>
                <h1 className='text-5xl font-semibold styled-font'>Learn Task Manager board basics</h1>
                <h2 className='my-6 text-xl another-font'>Getting started with Trello is easy, in this chapter you will learn about the fundamental components of Trello, boards, lists, cards, and more.</h2>
                <img src={image1} alt="" />
            </section>

            <section>
                <h4 className='text-2xl another-font mt-10 mb-4'>Welcome to Task Manager</h4>
                <p className='text-xl'>Trello is the visual work management tool that empowers teams to ideate, plan, manage, and celebrate their work together in a collaborative, productive, and organized way.

                    Whether you and your team are starting something new or trying to get more organized with your existing work, Trello adapts to any project. It helps you simplify and standardize your team’s work process in an intuitive way. But don’t let its simplicity fool you! Trello is user-friendly, yet still able to handle your team’s most robust projects.

                    This is a quick overview of the things you need to know when you are just getting started with your first project on Trello.</p>
            </section>

            <section>
                <h1 className='text-5xl styled-font text-teal-500 mt-10 mb-4'>What is a board?</h1>
                <p className='text-2xl'>Trello is the visual work management tool that empowers teams to ideate, plan, manage, and celebrate their work together in a collaborative, productive, and organized way. Whether you and your team are starting something new or trying to get more organized with your existing work, Trello adapts to any project. It helps you simplify and standardize your team’s work process in an intuitive way. But don’t let its simplicity fool you! Trello is user-friendly, yet still able to handle your team’s most robust projects. This is a quick overview of the things you need to know when you are just getting started with your first project on Trello.</p>
                <img className='my-8' src={image2} alt="" />
            </section>
            <section>
                <h1 className='text-5xl styled-font text-teal-500 mt-10 mb-4'>What is a list?</h1>
                <p className='text-2xl'>Lists (B) keep cards, or specific tasks or pieces of information, organized in their various stages of progress. Lists can be used to create a workflow where cards are moved across each step in the process from start to finish, or simply act as a place to keep track of ideas and information. There’s no limit to the number of lists you can add to a board, and they can be arranged and titled however you’d like.</p>
                <img className='my-8' src={image3} alt="" />
            </section>

        </div>
    )
}

export default Learn