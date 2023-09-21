import React from 'react'

interface CardInfoProps {
  info: {
      id: number;
      title: string;
      text: string;
      buttonText?: string;
      image: string;
  }
}

const ActionCardRI:React.FC <CardInfoProps> = ({info}) => {
  const { title, text, buttonText, image } = info;

  return (
    <div className='inline-block md:flex md:flex-row-reverse m-10 md:my-20 md:mr-20'>
    <div className='w-full md:w-1/2'>
        <img className='mx-auto' src={image} alt="" />
    </div>
    <div className='w-full my-10 md:w-1/2 md:mx-32 md:my-auto'>
        <h2 className='text-4xl font-semibold'>{title}</h2>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className='text-xl font-semibold'>{text}</p>

        <div>
          {
            buttonText &&  <button className='btn btn-ghost -ml-4 text-xl mt-4'>+ {buttonText}</button>
          }
        </div>
    </div>
</div>
  )
}

export default ActionCardRI