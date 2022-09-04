import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'

function NewConversationModal( {setShowModal} ) {

  const {contacts} = useContacts();
  const [selectedContactIds,setSelectedContactIds] = useState([])
  const {createConversation} = useConversations() 

  
  
  function handleCheckChange(id) {
    setSelectedContactIds(prevSelectedContactIds => {
      if(prevSelectedContactIds.includes(id)){
        return prevSelectedContactIds.filter(prevId => {
          return id !== prevId
        })
      }else{
        return [...prevSelectedContactIds, id]
      }
    })
  } 

  function submitHandler(e){
    e.preventDefault()

    createConversation(selectedContactIds);

    setShowModal(false)
  }

  return (
        
    <>
    <Modal.Header closeButton>
        Create Conversation
    </Modal.Header>  
    <Modal.Body>
        <Form onSubmit={submitHandler}>
            {contacts.map(contact => (
              <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check
                  type='checkbox'
                  value={selectedContactIds.includes(contact.id)}
                  label={contact.name}
                  onChange = {() => handleCheckChange(contact.id)}
                />
                  
              </Form.Group>
            ))}

            <Button type='submit' className='mt-3'>
                Create Conversation
            </Button>
        </Form>
    </Modal.Body>
</>
      
    )
}

export default NewConversationModal