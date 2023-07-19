import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

type Props = {}

const header = (props: Props) => {
  return (
    <Navbar bg="body-tertiary rounded" expand="lg" aria-label="Thirteenth navbar example">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-lg-flex">
          <Navbar.Brand href="#" className="col-lg-3 me-0">Centered nav</Navbar.Brand>
          <Nav className="col-lg-6 justify-content-lg-center">
            <Nav.Link active href="#">Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link disabled>Disabled</Nav.Link>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <Button variant="primary">Button</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header