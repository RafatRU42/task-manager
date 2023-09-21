import React from 'react'
import image1 from '../assets/images/viewC1.svg'
import image2 from '../assets/images/viewC2.svg'
import image3 from '../assets/images/viewC3.svg'
import image4 from '../assets/images/viewC4.svg'
import image5 from '../assets/images/viewC5.svg'
import image6 from '../assets/images/viewC6.svg'
import image7 from '../assets/images/viewC7.webp'
import ActionCardLI from './ActionCards/ActionCardLI'

const ViewCards = () => {

    
  const cardInfo1 ={
    id:1,
    title:'Success starts with a Trello board',
    text:'Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    image:image1
  }
  const cardInfo2 ={
    id:2,
    title:'Success starts with a Trello board',
    text:'Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    buttonText:'',
    image:image1
  }
  const cardInfo3 ={
    id:3,
    title:'Success starts with a Trello board',
    text:'Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    buttonText:'',
    image:image1
  }
  const cardInfo4 ={
    id:4,
    title:'Success starts with a Trello board',
    text:'Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    buttonText:'',
    image:image1
  }
  const cardInfo5 ={
    id:5,
    title:'Success starts with a Trello board',
    text:'Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    buttonText:'',
    image:image1
  }
  const cardInfo6 ={
    id:6,
    title:'Success starts with a Trello board',
    text:'Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    buttonText:'',
    image:image1
  }
  const cardInfo7 ={
    id:7,
    title:'Success starts with a Trello board',
    text:'Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    buttonText:'',
    image:image1
  }
  return (
    <div>
        <ActionCardLI info={cardInfo1}></ActionCardLI>
    </div>
  )
}

export default ViewCards