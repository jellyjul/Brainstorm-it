import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png"
import styles from "../Header/header.module.scss"
import {NavLink} from "react-router-dom"


export default function Header() {
    return (
    <Navbar collapseOnSelect expand="lg">
        <Container>
            <NavLink  className={styles.text} to="/">brainstorm it!<img src={logo} className={styles.logo} alt='logo'></img></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={styles.nav} to='/'>Home</NavLink>
                        <NavLink className={styles.nav}  to='/table'>Wordlist</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className={styles.nav}  to ="/game">Games</NavLink>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
