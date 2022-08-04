import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
function TodoItem({todo,onDelete}) {
  return (
    
    <>
    <Container className="text-center shadow-lg p-4 my-4" style={{width:"400px"}}>
    <h2>{todo.id}</h2>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <hr></hr>
    <Button variant="danger" size="sm" onClick={()=>  {onDelete(todo)}}>
        Delete
    </Button>
    </Container>
  
    </>
    
  )
}

export default TodoItem