import React from 'react'
import {
    Button,
    Form
} from 'react-bootstrap'
import Axios from 'axios'

// import redirect dr reactrouterdom
import { Redirect } from 'react-router-dom'

// import action disini
import { login } from '../action'

// import connect
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            users: {}
        }
    }

    // ACTION DIPAKAI DISINI
    // pakai index ke 0 [0] karena ngambil nya pakai query di axios get nya
    btnLogin = () => {
        let username= this.refs.username.value
        let password= this.refs.password.value
        console.log(username, password)

        if (!username || !password) return alert ('Input All Form')

        Axios.get (`http://localhost:2000/users?username=${username}&password=${password}`)
        .then((res) => {
            console.log(res.data)
            if (res.data.length === 0) return alert ('Invalid Username or Password')

            // this.setState({users: res.data[0]}) diganti jadi dibawah, pake action
            // selain manggil login ke global storage
            this.props.login(res.data[0])

            // pakai localstorage
            // define localstorage.username terus dikasih isinya itu dia username dari user
            // pakai localstorage spy abis login, kesimpen di localstorage
            // karea redux itu kalo di refresh/reload, ilang datanya
            localStorage.username = username
        })
        .catch((err) => (console.log(err)))
    }

    render () {
        // jd abis login, kalo username nya ada, ke redirect ke home dan UserName nya ganti
        if (this.props.username) return <Redirect to='/' />

        // console.log(this.state.users)
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

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, {login}) (Login)
// login yg dlm {} itu function login yg di action
// Login yg di dalam () itu nama class yang diatas