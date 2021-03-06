import React from 'react';
import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import { Image, Nav, NavLink, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const history = createHistory();

function MainNavbar() {
  return (
    <>
    <Navbar className="color-nav">
        <Navbar.Brand href="#home" className="img-responsive nav-link">
        <Image src="././hat.jpg" roundedCircle alt=""
            width="30"
            height="30"
            className="d-inline-block align-top logo-nav" />
        BAIROLETO HAMBURGUESAS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Item>
                <Nav.Link>
                <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                <Link to="/menu">Menu</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                <Link to="/contact">Contact</Link>
                </Nav.Link>
            </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}
export default MainNavbar;

