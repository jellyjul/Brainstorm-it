import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../images/logo.png"
import styles from "../Header/header.module.scss"


export default function Header() {
    return (
    <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand  className={styles.text} href="#home">brainstorm it!<img src={logo} className={styles.logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#wordlist">Wordlist</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Home
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wordlist</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
            <Nav.Link href="#games">Games</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
