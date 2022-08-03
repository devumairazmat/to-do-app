import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import propTypes from 'prop-types';

function NavScrollExample(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact" >
             Contact Us
            </Nav.Link>
          </Nav>
        {
          props.searcBar?   <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>: ""
        }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavScrollExample.defaultProps = {
  title: 'Nav Scroll Example',
  searcBar : false
};


NavScrollExample.propTypes = {
title : propTypes.string.isRequired
}

export default NavScrollExample;