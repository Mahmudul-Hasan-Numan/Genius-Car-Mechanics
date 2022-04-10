import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="md" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="#experts">Experts</Nav.Link>
                        {!user.email ?
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            :
                            <button onClick={logOut} className="btn btn-info p-2 m-1">LogOut</button>
                        }
                        <Navbar.Text>
                            Signed in as: <Link to="/login">{user.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;