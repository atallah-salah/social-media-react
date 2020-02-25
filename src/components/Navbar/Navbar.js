import React from "react";
import "./Navbar.css";

// import dependencies
import { Navbar as NavElement, Form, Nav } from "react-bootstrap";

// import components
import Searchbar from "../../components/Searchbar/Searchbar";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavElement collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavElement.Brand>Social Media</NavElement.Brand>
        <NavElement.Toggle aria-controls="responsive-navbar-nav" />
        <NavElement.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <Searchbar />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </NavElement.Collapse>
      </NavElement>
    </div>
  );
};

const logout = () => {
  console.log("logout");
};

export default Navbar;
