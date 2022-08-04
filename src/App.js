import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import NavScrollExample from "./components/navabr/Navbar";
import Footer from "./components/footer/Footer";
import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";

function App() {
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // Add todo
  const addTodo = (title, description) => {
    console.log("More To Do's Added", title, description);
    let id;
    if (todos.length == 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      id: id,
      title: title,
      description: description,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  // Delete todo
  const onDelete = (todo) => {
    console.log("Delete this To do Task", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
  };
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 
  return (
    <>
      <NavScrollExample title="My Todos App" searchBar="false" />
      <AddToDo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
