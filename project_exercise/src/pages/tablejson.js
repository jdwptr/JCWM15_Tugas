import React from 'react'
import Axios from 'axios'
import {
    Button,
    Table,
    Form,
} from 'react-bootstrap'

class Table1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabeljson: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/tablejson')
            .then((res) => {
                console.log(res.data)
                this.setState ({tabeljson: res.data})
            })
            .catch((err) => console.log(err))

    }

    tableHead = () => {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Email</th>
                    <th style={{margin: 'auto'}}>Action</th>
                </tr>
            </thead>
        )
    }

    tableBody = () => {
        let {tabeljson} = this.state
        return (
            <tbody>
                {tabeljson.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button onClick={this.btnEdit} style={{marginRight: '10px'}}>EDIT</Button>
                                <Button onClick={() => this.btnDel(item.id)}>DELETE</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    tableInput = () => {
        return (
            <tbody>
                <tr>
                    <td>#</td>
                    <td>
                        <Form.Control type='text' placeholder='Enter First Name' ref='firstname' />
                    </td>
                    <td>
                        <Form.Control type='text' placeholder='Enter Last Name' ref='lastname' />
                    </td>
                    <td>
                        <Form.Control type='email' placeholder='Enter Email' ref='email' />
                    </td>
                    <td>
                        <Button onClick={this.btnSubmit}>SUBMIT</Button>
                    </td>
                </tr>
            </tbody>
        )
    }

    
    tableSemua = () => {
        return (
            <Table>
                {this.tableHead()}
                {this.tableBody()}
                {this.tableInput()}
            </Table>
        )
    }

    getDataAxios = () => {
        Axios.get('http://localhost:2000/tablejson')
            .then((res) => {
                console.log(res.data)
                this.setState({ tabeljson: res.data })
            })
            .catch((err) => console.log(err))
    }

    btnEdit = () => {
        console.log('btn edit di klik')
        // {this.tableInput()}
    }

    btnDel = (i) => {
        let hapus = i
        console.log('btn delete di klik')
        Axios.delete (`http://localhost:2000/tablejson/${hapus}`)
        .then((res) => {
            console.log(res.data)
            this.getDataAxios()
                // Axios.get('http://localhost:2000/users')
                //     .then((res) => {
                //         console.log(res.data)
                //         this.setState({ dbUser: res.data })
                //     })
                //     .catch((err) => console.log(err))
            })
        .catch((err) => console.log(err))
    }


    btnSubmit = () => {
        // get data
        let first_name = this.refs.firstname.value
        let last_name = this.refs.lastname.value
        let email = this.refs.email.value
        console.log(first_name, last_name, email)

        Axios.post('http://localhost:2000/tablejson', {
            first_name,
            last_name,
            email
        })
            .then((res) => {
            console.log(res.data)
                Axios.get('http://localhost:2000/tablejson')
                    .then((res) => {
                        console.log(res.data)
                        this.setState({ tabeljson: res.data })
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.tabeljson)
        return (
            <div>
                <h1>TUGAS TABEL</h1>
                {this.tableSemua()}
            </div>
        )
    }
}

export default Table1