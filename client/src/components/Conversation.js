import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

function Conversation() {

  const {conversations, selectConversationIndex} = useConversations()


  return (
    <ListGroup variant='flush'>
      {
        conversations.map((conversation,idx) => (
          <ListGroupItem 
          key={idx}
          action
          active={conversation.selected}
          onClick={() => selectConversationIndex(idx)}
          >
            {conversation.recipients.map(recipient => recipient.name).join(', ')}
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default Conversation