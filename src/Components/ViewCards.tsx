import image1 from '../assets/images/viewC1.svg'
import image2 from '../assets/images/viewC2.svg'
import image4 from '../assets/images/viewC4.svg'
import image5 from '../assets/images/viewC5.svg'
import image6 from '../assets/images/viewC6.svg'
import image7 from '../assets/images/viewC7.webp'
import ActionCardLI from './ActionCards/ActionCardLI'
import ActionCardRI from './ActionCards/ActionCardRI'

const ViewCards = () => {

    
  const cardInfo1 ={
    id:1,
    title:'Success starts with a Task Manager board',
    text:'Similar to a Kanban board, a Task Manager board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.',
    image:image1
  }
  const cardInfo2 ={
    id:2,
    title:'Hit deadlines every time with Timeline',
    text:'Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.',
    buttonText:'Learn more about timeline view',
    image:image2
  }
  const cardInfo3 ={
    id:3,
    title:'Use Calendar to stay on top of tasks',
    text:'Start each day without any surprises. Whether scheduling a quarterly editorial calendar or staying on top of your to-dos, Calendar is like a crystal ball giving you a clear vision of what work lies ahead. Sync any third party calendars to maintain the perfect work-life balance.',
    buttonText:'Learn more about Calendar view',
    image:image6
  }
  const cardInfo4 ={
    id:4,
    title:'Get actionable insights with Dashboard',
    text:'Bring a bird’s-eye view to projects and processes with Dashboard so that you can manage workloads and prevent bottlenecks before they begin. Visualize key metrics like due dates, assigned cards, and cards per list to keep stakeholders aligned and confidence running high.',
    buttonText:'Learn more about Dashboard view',
    image:image4
  }
  const cardInfo5 ={
    id:5,
    title:'See it like a spreadsheet with Table',
    text:'Dial in on all of the work that is happening across a board with the Table view. View your work in a convenient spreadsheet-styled list that can be sorted and filtered to drill down to exactly the cards you need to see.',
    buttonText:'Learn more about Table view',
    image:image5
  }
  const cardInfo6 ={
    id:6,
    title:'Find a new sense of direction with Map',
    text:'Wherever you are in the world, use Trello’s Map view to display location-based data in context on an interactive map. Whether tracking real estate properties, planning an event, or organizing work in the field, Map will make sure your team doesn’t lose their way.',
    buttonText:'Learn more about Map view',
    image:image6
  }
  const cardInfo7 ={
    id:7,
    title:'Manage work across multiple boards',
    text:'Create as many custom overviews as you need across Workspace boards. Use the Workspace Table and Calendar views to keep track of minor details or large projects.',
    buttonText:'Learn more about Workspace views',
    image:image7
  }
  return (
    <div>
        <ActionCardLI info={cardInfo1}></ActionCardLI>
        <ActionCardRI info={cardInfo2}></ActionCardRI>
        <ActionCardLI info={cardInfo3}></ActionCardLI>
        <ActionCardRI info={cardInfo4}/>
        <ActionCardLI info={cardInfo5}/>
        <ActionCardRI info={cardInfo6}/>
        <ActionCardLI info={cardInfo7}/>

    </div>
  )
}

export default ViewCards