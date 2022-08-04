import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function AddToDo(props) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !description ){
            alert("Titel and Description should not be blank!");
        }
        else{
            props.addTodo(title, description);
            setTitle("");
            setDescription("");
        }
    }
  return (
   <Container>
     <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3 className="my-4 text-center">Add To Do's</h3>
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Description" />
      </Form.Group>
      <Button variant="success" size="sm" type="submit">
        Add To Do
      </Button>
    </Form>
   </Container>
  );
}

export default AddToDo;