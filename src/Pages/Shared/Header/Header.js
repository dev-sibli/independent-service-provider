import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand>
                        <Nav.Link className='text-white' as={Link} to="/">
                            Traveler
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/#service">
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="checkout">
                                Checkout
                            </Nav.Link>
                            <Nav.Link as={Link} to="blogs">
                                Blogs
                            </Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">
                                About
                            </Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none ' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;