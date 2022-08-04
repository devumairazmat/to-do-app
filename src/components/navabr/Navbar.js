import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function NavScrollExample(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Link to="/"> {props.title}</Link>  
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <nav>
            <ul className="d-flex gap-4 my-2 " style={{listStyle: 'none'}} >
              <li> <Link to="/" >Home</Link></li>
              <li> <Link to="/about" >About Us</Link></li>
            </ul>
            </nav>
           
            
            

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