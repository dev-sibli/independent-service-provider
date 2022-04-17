import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link className='text-decoration-none' to="/home">Traveler</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <Link className='text-decoration-none' to="/service">Services</Link></Nav.Link>
                            <Nav.Link href="#checkout">Checkout </Nav.Link>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                            <Nav.Link >
                                <Link className='text-decoration-none' to="/about">About</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;