import BannerRI from "../Components/Banner/BannerRI"

const Automate = () => {

    const bannerInfo={
        id:1,
        heading:'Automate your workflow with Butler',
        text:'Powerful no-code automation is built into every Trello board. With Butler, you can focus on the work that matters most and let the robots do the rest.',
        freeText:'Start automating today — It’s free!',
        image:'https://i.ibb.co/gdr2wN2/workflow-removebg-preview.png',
        buttonText:'Try Butler',
        linkText:'Learn more about Task manager plans and pricing',
        bgColor:'bg-gradient-to-r from-cyan-500 to-blue-500'
    }

  return (
    <div>
        <BannerRI key={bannerInfo.id} info={bannerInfo}></BannerRI>
    </div>
  )
}

export default Automate