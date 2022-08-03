import React from 'react'
import Button from 'react-bootstrap/Button';

function TodoItem({todo,onDelete}) {
  return (
    <>
    <h2>{todo.id}</h2>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <hr></hr>
    <Button variant="danger" size="sm" onClick={()=>  {onDelete(todo)}}>
        Delete
    </Button>
    </>
  )
}

export default TodoItem