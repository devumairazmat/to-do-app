import React from "react";
import { Container } from "react-bootstrap";
import profile from "../../assets/profile-img.jpg"
import Footer from "../footer/Footer";
import NavScrollExample from "../navabr/Navbar";
function AboutUs() {
  return (
    <>
    <NavScrollExample title="My Todos App"/>
      <Container className="text-center">
        <h1>About Umair's TO DO App</h1>
        <p>
          ToDo List App is a kind of app that generally used to maintain our
          day-to-day tasks or list everything that we have to do, with the most
          important tasks at the top of the list, and the least important tasks
          at the bottom. It is helpful in planning our daily schedules.
        </p>
        <img src={profile} alt="Placeholder" />
      </Container>
      <Footer/>
    </>
  );
}

export default AboutUs;
