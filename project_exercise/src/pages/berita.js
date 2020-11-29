import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button,
    Nav,
    NavDropdown,
    Navbar,
    Form,
    FormControl,
} from 'react-bootstrap'


// let negara = () => {}

let url = `http://newsapi.org/v2/top-headlines?country=id&apiKey=`
let key = '51c9cd4791df43c9805672b649f203e7'

class Berita1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            berita: [],
            listNeg: ['ar','au','at'],
        }
    }

    // url = () => {
    //     return this.state.listNegara.map((item) => {
    //         return (
    //             `http://newsapi.org/v2/top-headlines?country=${item}&apiKey=` 
    //         )
    //     })
    // }

    componentDidMount() {
        Axios.get(url + key)
            .then((response) => {
                console.log(response)
                this.setState({ berita: response.data.articles })
            })
            .catch((error) => console.log(error))
    }

    showCardNews = () => {
        return this.state.berita.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '25px' }} key={index}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="primary" >Read more</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    country = () => {
        // tembak navdropdown COUNTRIES disini
    }

    topic = () => {
        // tembak navdropdown TOPIC disini
    }

    render() {
        console.log(this.state.berita)
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">WORLD NEWS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                            <NavDropdown title="COUNTRIES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="TOPIC" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.showCardNews()}
                </div>
            </div>
        )
    }
}

export default Berita1