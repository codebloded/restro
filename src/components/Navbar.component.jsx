import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavbarX = () => {
  return (
    <div>
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                height={55}
                width={300}
                src={require("../assets/logo.png")}
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="m-3 mt-5 " href="#Menu">
                Menu
              </Nav.Link>
              <Nav.Link className="m-3 mt-5" href="#About">
                About
              </Nav.Link>
              <Nav.Link className="m-3 mt-5" href="#Contact">
                Contact
              </Nav.Link>
              <Nav.Link className="m-3 mt-5" href="#OrdeOnline">
                Order Online
              </Nav.Link>
              <Nav.Link className="m-3 mt-5" href="#Catering">
                Catering
              </Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <span className="m-3 mt-5 " style={{ fontWeight: "bold" }}>
                +9137-8434-454
              </span>
              <Button
                className="m-3 mt-5 "
                style={{ border: "2px solid #000" }}
                variant="light"
              >
                Sign-In
              </Button>
              <Button className="m-3 mt-5" variant="dark">
                Sign-Up
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavbarX;
