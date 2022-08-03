import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavScrollExample from "./components/navabr/Navbar";
import Footer from "./components/footer/Footer";
import Todos from "./components/Todos";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("Delete this To do Task", todo);
    setTodos(
      todos.filter((e) => {
        return e!== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Web Development",
      description:
        "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet computer",
    },
    {
      id: 3,
      title: "Desktop Applictaion Development",
      description:
        "Desktop application development is a type of software programming that creates computer programs to be run on the desktop. The most common use case for these applications is business-oriented and provides certain functionality such as word processing, spreadsheets, or project management tools",
    },
  ]);

  return (
    <>
      <NavScrollExample title="My Todos App" searchBar="false" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
