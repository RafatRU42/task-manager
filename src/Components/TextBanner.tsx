import React from 'react'

interface BannerProps{
    info:{
        heading:string;
        text:string;
        buttonText:string;
        bgColor:string;
    }
}

const TextBanner:React.FC <BannerProps> = ({info}) => {
    const {heading,text,buttonText,bgColor} = info;
    return (
        <div className={`text-center ${bgColor}`}>
            <h1 className='text-4xl font-semibold pt-20 text-white'>{heading}</h1>
            <h4 className='text-xl font-semibold my-6 text-white'>{text}</h4>
            <button className='btn btn-info btn-outline mb-10 mx-auto'>{buttonText}</button>
        </div>
    )
}

export default TextBanner