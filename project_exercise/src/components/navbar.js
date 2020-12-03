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

// import connect
import {connect} from 'react-redux'

// import action logout
import { logout } from '../action'

class Navigation extends React.Component {
    // buat kalo di klik logout, dia hilang & balik ke username
    btnLogout = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }

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
                            {this.props.username ? this.props.username : 'UserName'}
                            {/* UserName => jd kalo gagal login ga berubah jd nama kita, tetep UserName di dropdownnya */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* bikin kayak gini supaya kalo abis klik login, masuk, di klik dropdown
                            berubah jadi logout */}
                            {this.props.username
                            ?
                            <Dropdown.Item onClick={this.btnLogout}>Logout</Dropdown.Item>
                            :
                            <>
                                <Dropdown.Item as={Link} to="/Login">Login</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/Register">Register</Dropdown.Item>
                            </>
                            }

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

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, {logout}) (Navigation)