import React from 'react'

const WorkflowCard = ({ info }) => {
    return (
    <div className=''>
            <div className='mr-5 '>
            <div className="card w-96 h-60 bg-base-100 shadow-xl ">
                    <p className={`h-12 ${info.color} w-full rounded-t-xl`}></p>
                <div className="p-10">
                    <h2 className="card-title">{info.name}</h2>
                    <p>{info.description}</p>

                </div>
            </div>
        </div>
    </div>
    )
}

export default WorkflowCard