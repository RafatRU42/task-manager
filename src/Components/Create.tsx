import image1 from '../assets/images/ch2_02.webp'
import image2 from '../assets/images/ch2_04.webp'
const Create = () => {
  return (
    <div>
          <section>
                <h4 className='text-xl font-semibold another-font'>Chapter 2</h4>
                <h1 className='text-5xl font-semibold styled-font'>Create your first project</h1>
                <h2 className='my-6 text-xl another-font'>Trello is flexible and fast enough to manage any sized project from start to finish. Learn how to build your first board and start moving work forward.</h2>
            </section>
        
            <section>
                <h4 className='text-5xl styled-font text-teal-500 mt-10 mb-4'>Create a board</h4>
                <p className='text-xl mb-6'>Structuring a project with all the members, ideas, tasks, and due dates and optimizing it for team collaboration can be overwhelming. Thankfully, you can get a fresh start with a Trello board where you can organize everything to meet your needs and be successful.</p>
                <img src={image1} alt="" />
            </section>

            <section>
                <h4 className='text-5xl styled-font text-teal-500 mt-10 mb-4'>Customize your board</h4>
                <p className='text-xl mb-6'>No two workflows are alike, so why not give each board a unique look and feel? In the spirit of fun and flexibility, we let you customize your board background to reflect your team’s unique personality.</p>
                <img src={image2} alt="" />
            </section>
            
            <section>
                <h4 className='text-5xl styled-font text-teal-500 mt-10 mb-4'>Customize your board</h4>
                <p className='text-xl mb-6'>No two workflows are alike, so why not give each board a unique look and feel? In the spirit of fun and flexibility, we let you customize your board background to reflect your team’s unique personality.</p>
                <img src={image2} alt="" />
            </section>
    </div>
  )
}

export default Create