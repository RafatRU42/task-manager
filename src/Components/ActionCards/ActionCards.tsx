import image1 from '../../assets/images/Spot-Illo_Rules.svg'
import ActionCardLI from './ActionCardLI'
import ActionCardRI from './ActionCardRI'
import image2 from '../../assets/images/spot-illo-butler-button-2.svg'
import image3 from '../../assets/images/spot-illo-favorite_apps-3.svg'
import image4 from '../../assets/images/Spot-illo_Automation-4.svg'

const ActionCards = () => {
    const cardInfo1={
        id:1,
        title:'Rule your boards',
        text:'Setting rules means important tasks won’t fall through the cracks. Just set a trigger and the actions to be performed, and let Butler run the show. Doesn’t that rule?',
        buttonText:'How to try it',
        image:image1
    }
    
    const cardInfo2={
      id:2,
      title:'Move work forward',
      text:'Get to the next step faster with custom card and board buttons. Card buttons appear on the back of every card, and board buttons are in the top right corner. They both perform a series of actions in a single click!',
      buttonText:'How to try it',
      image:image2
    }

    const cardInfo3={
      id:3,
      title:'Integrate your favorite apps',
      text:'The power of Butler can be extended beyond the boundary of your boards with integrations for Slack, Jira, and email. Butler can post messages to Slack channels, create new Jira tickets, post comments to existing tickets, and send automated emails right from your boards.',
      buttonText:'Learn more',
      image:image3
    }

    const cardInfo4={
      id:4,
      title:'Intelligent automation tips',
      text:'As you use a Trello board, Butler will recognize repetitive actions being performed and suggest automations based on those actions that can be enabled in a single click.',
      image:image4
    }
  return (
    <div>
        <ActionCardLI key={cardInfo1.id} info={cardInfo1}></ActionCardLI>
        <ActionCardRI key={cardInfo2.id} info={cardInfo2}></ActionCardRI>
        <ActionCardLI key={cardInfo3.id} info={cardInfo3}></ActionCardLI>
        <ActionCardRI key={cardInfo4.id} info={cardInfo4}></ActionCardRI>
    </div>
  )
}

export default ActionCards