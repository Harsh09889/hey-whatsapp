import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Coversation from "./Conversation";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";

const CONVERSATION_KEY = "conversation";
const CONTACTS_KEY = "contacts";

function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const conversationOpen = activeKey === CONVERSATION_KEY;
  const [showModal, setShowModal] = useState(false);

  function handleShowModal(e) {
    e.preventDefault();
    console.log(showModal);
    setShowModal(!showModal);
  }

  return (
    <div className="d-flex flex-column" style={{ maxWidth: "250px"}}>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Coversation />
          </Tab.Pane>

          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>

        <div className="border-right border-top p-2 small">
          Your ID : <span className="text-muted">{id}</span>
        </div>

        <Button className="rounded-0" onClick={handleShowModal}>
          New {conversationOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={showModal} onHide={setShowModal}>
        {conversationOpen ? (
          <NewConversationModal setShowModal={setShowModal} />
        ) : (
          <NewContactModal setShowModal={setShowModal} />
        )}
      </Modal>
    </div>
  );
}

export default Sidebar;
