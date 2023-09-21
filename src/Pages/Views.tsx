import BannerRI from '../Components/Banner/BannerRI'
import ViewCards from '../Components/ViewCards'
import image0 from '../assets/images/viesBanner.svg'

const Views = () => {

  const bannerInfo = {
    id: 1,
    heading: 'Give work a new look with Trello views.',
    text: 'See your projects from every angle with Board, Timeline, Table, Calendar, Dashboard, Map and Workspace views that will bring a fresh perspective to the task at hand.Boards are available to all users. Additional views require a Premium or Enterprise account',
    freeText: '',
    image: image0,
    buttonText: 'Try views for free!',
    linkText: 'Learn more about Task Manager plans and pricing',
  }


  return (
    <div>
      {/* Views banner section */}

      <section>
        <BannerRI info={bannerInfo}></BannerRI>
      </section>

      {/* Views Card Section */}
      <section className=''>
        <h1 className='text-4xl font-semibold hidden md:grid text-center'>See what views can do for you</h1>
        <ViewCards></ViewCards>
      </section>

      {/* Ready section */}
      <section className='text-center bg-gradient-to-b from-cyan-200 to-white'>
        <h1 className='text-4xl font-semibold pt-20'>Bring powerful new views to your team’s work</h1>
        <h4 className='text-xl font-semibold my-6'>Start a free trial today</h4>
        <button className='btn btn-info btn-outline mb-10 mx-auto'>I'm ready</button>
      </section>
    </div>
  )
}

export default Views