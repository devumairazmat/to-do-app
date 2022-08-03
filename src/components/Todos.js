import React from "react";
import { Container } from "react-bootstrap";
import TodoItem from "./TodoItem";

function Todos(props) {
  return (
    <>
      <Container>
        <h2 className="text-center">To Do's List</h2>
        
        {
          props.todos.length === 0 ? "No To Do Available to Display" : 
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem
              todo={todo} 
              key={todo.id} 
              onDelete={props.onDelete} />
            </>
          );
        })
        }
   
      </Container>
    </>
  );
}

export default Todos;
