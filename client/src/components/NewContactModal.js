import React, {useRef} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

function NewContactModal({setShowModal}) {

    const idRef = useRef();
    const nameRef = useRef();

    const { createContact } = useContacts()
    
    function submitHandler(e){
        e.preventDefault()

        createContact(idRef.current.value,nameRef.current.value)

        setShowModal(false)      
    }

  return (
    <>
        <Modal.Header closeButton>
            Create New contact
        </Modal.Header>  
        <Modal.Body>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>
                        ID 
                    </Form.Label>
                    <Form.Control ref ={idRef} required/>
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label>
                        Name 
                    </Form.Label>
                    <Form.Control ref ={nameRef} />
                </Form.Group>

                <Button type='submit' className='mt-3'>
                    Create  
                </Button>
            </Form>
        </Modal.Body>
    </>
        )
}

export default NewContactModal