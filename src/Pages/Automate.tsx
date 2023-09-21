import ActionCards from "../Components/ActionCards/ActionCards"
import BannerRI from "../Components/Banner/BannerRI"
import image from '../assets/images/Illo-Flowchart.svg'
import image2 from '../assets/images/butler-header.svg'


const Automate = () => {

    const bannerInfo = {
        id: 1,
        heading: 'Automate your workflow with Butler',
        text: 'Powerful no-code automation is built into every Task Manager board. With Butler, you can focus on the work that matters most and let the robots do the rest.',
        freeText: 'Start automating today — It’s free!',
        image:image2,
        buttonText: 'Try Butler',
        linkText: 'Learn more about Task manager plans and pricing',
        bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500'
    }

    // 'https://i.ibb.co/gdr2wN2/workflow-removebg-preview.png'

    return (
        <div>
            {/* This is top Banner Section */}
            <section>
                <BannerRI key={bannerInfo.id} info={bannerInfo}></BannerRI>
            </section>

            {/* Section 2 */}
            <section className="text-center my-10">
                <h1 className="text-4xl  font-bold mb-10">Create rules, buttons, and commands to  automate <br /> almost any action in Task Manager.</h1>
                <img className="mx-auto" src={image} alt="" />
            </section>

            {/* Action Card Section */}
            <section>
                <ActionCards></ActionCards>
            </section>
        </div>
    )
}

export default Automate