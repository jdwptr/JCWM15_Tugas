import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Dropdown,
} from 'react-bootstrap'

import logo4 from './react.png'

// import link react router dom
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <img src={logo4} style={style.container}></img>
                <Navbar.Brand href="#home">React Exercise</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/carousel">
                            Carousel
                        </Nav.Link>
                        <NavDropdown title="Practice" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/todolist">To Do List</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/berita'>News</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/tablejson'>Table</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Dropdown style={{marginRight: '40px'}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Username
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/Login">Login</Dropdown.Item>
                            <Dropdown.Item>Register</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const style = {
    container: {
        width: '90px',
        height: '70px'
    }
}

export default Navigation