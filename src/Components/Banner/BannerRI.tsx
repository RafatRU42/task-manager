import React from 'react'


interface BannerProps{
    info: {
        id: number;
        heading: string;
        text: string;
        freeText: string;
        image: string;
        buttonText: string;
        linkText: string;
        bgColor?:string;
    }
}

const BannerRI:React.FC <BannerProps> = ({info}) => {
  return (
    <div>
             <div className={`h-[70vh] ${info.bgColor} flex`}>
                <div className='w-full md:w-1/2'>
                    <h1 className={`${info.bgColor && 'text-white'} font-bold another-font text-5xl m-20`}>{info.heading}</h1>
                    <h3 className={`text-2xl semibold ${info.bgColor && 'text-white'} mx-20 -mt-10`}>{info.text}</h3>
                    <button className='btn btn-success mx-20 mt-10 btn-outline'>{info.buttonText}</button>

                </div>
                <div className='w-1/2 my-auto mr-10 hidden md:flex'>
                    <img src={info.image} alt="" />

                </div>
            </div>
    </div>
  )
}

export default BannerRI