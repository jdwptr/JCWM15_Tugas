import React from 'react'
import {
    Button,
    Form
} from 'react-bootstrap'
import Axios from 'axios'

class Login extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            users: {}
        }
    }

    btnLogin = () => {
        let username= this.refs.username.value
        let password= this.refs.password.value
        console.log(username, password)

        if (!username || !password) return alert ('Input All Form')

        Axios.get (`http://localhost:2000/users?username=${username}&password=${password}`)
        .then((res) => {
            console.log(res.data)
            if (res.data.length === 0) return alert ('Invalid Username or Password')

            this.setState({users: res.data[0]})
            })
        .catch((err) => (console.log(err)))
    }

    render () {
        console.log(this.state.users)
        return (
            <div style={styles.container}>
                <h1>LOGIN</h1>
                <Form.Control ref='username' style={styles.item} type="text" placeholder="Enter Username" />
                <Form.Control ref='password' style={styles.item} type="password" placeholder="Enter Password" />
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <Button variant='primary' onClick={this.btnLogin}>LOGIN</Button>
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

export default Login