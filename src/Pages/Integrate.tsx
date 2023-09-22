import image from '../assets/images/email.webp'
const Integrate = () => {
  return (
    <div>
             <section>
                <h4 className='text-xl font-semibold another-font'>Chapter 4</h4>
                <h1 className='text-5xl font-semibold styled-font'>Integrate Trello with other apps</h1>
                <h2 className='my-6 text-xl another-font'>Turn Trello into your source of truth, break down communication silos, and connect Trello to all of the other tools your team relies on.</h2>
                <p className="text-xl">The saying is true—no one is an island. Working in silos is detrimental to your team, your business, and even your customers. Rather than working together to accomplish your common goals, silos put barriers in place and can lead to teams working against each other. Flexible tools and transparent communication help you overcome silo effects. Trello is a powerful hub that connects seamlessly to a variety of apps to help you build bridges within your company.</p>
            </section>

            <section>
                <h1 className='text-5xl styled-font text-teal-500 mt-10 mb-4'>Turn emails into real action items</h1>
                <p className='text-2xl'>Your relationship with emails? It's complicated… we get it! Most of the time emails are overwhelming, sometimes they are nonetheless relevant and full of useful information for your projects. To make sure you don't lose important information we have several ways for you to turn your emails into true action items.</p>
                <img className='my-8' src={image} alt="" />
            </section>
    </div>
  )
}

export default Integrate