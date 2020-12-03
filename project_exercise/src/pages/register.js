import React from 'react'
import Axios from 'axios'
import {
    Form,
    Button
} from 'react-bootstrap'

class Register extends React.Component {
    // liat btnLogin di login.js
    btnSubmit = () => {
        // akses input
        let username = this.refs.username.value
        let password = this.refs.password.value
        let email = this.refs.email.value

        
    }

    render () {
        return (
            <div style={styles.container}>
                <h1>REGISTER</h1>
                <Form.Control ref='username' style={styles.item} type="text" placeholder="Enter Username" />
                <Form.Control ref='password' style={styles.item} type="password" placeholder="Enter Password" />
                <Form.Control ref='email' style={styles.item} type="email" placeholder="Enter Email" />
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <Button variant='primary' onClick={this.btnSubmit}>SUBMIT</Button>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        margin: '100px auto',
        width: '300px',
        height: '300px',
        padding: '10px',
        backgroundColor: 'lightblue',
    },
    item: {
        margin: '15px 0'
    }
}

export default Register
















// nambah ke database
// JSON
// pake axios post

// abis reg, pindah ke halaman login manual
