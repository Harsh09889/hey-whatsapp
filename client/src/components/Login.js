import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = (props) => {
  
    const refId = useRef();
  
    const handleSubmit = (e) => {
    e.preventDefault();
      console.log(refId.current.value)
    props.onSubmitId(refId.current.value);
    refId.current.value = "";
  };

  function createNewId() {
    props.onSubmitId(uuidV4())
  }

  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control ref={refId} type="text" required />
        </Form.Group>
        <Button type="submit">Login</Button>
        <Button 
        className="m-3" 
        variant="secondary"
        onClick={createNewId}
        >
          Create New ID
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
