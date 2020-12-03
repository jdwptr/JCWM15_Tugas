import React from 'react'
import Axios from 'axios'

// import reactredux
import { connect } from 'react-redux'

// import navigation bar from components navbar
import Navigation from './components/navbar.js'

// import switch
import {Switch, Route} from 'react-router-dom';

// import content
import Home from './pages/home'
import Carousel1 from './pages/carousel'
import Todolist from './pages/todolist'
import Linkpage from './pages/linkpage'
import Berita1 from './pages/berita'
import Table1 from './pages/tablejson'
import Login from './pages/login'
import Register from './pages/register'
import Error from './pages/404notfound'

// import action login
import { login } from './action'

// import login krn butuh u/ngirim data balik ke global state
// import connect krn  mau nyambungin ablik data ke global storage

// bikin localstorage nya di login.js

class App extends React.Component {
  // panggil lg supaya abis di refresh ga ilang
  // atau (`http://localhost:2000/users?username=${localStorage.username}`)
  componentDidMount () {
    Axios.get (`http://localhost:2000/users?username=${localStorage.getItem('username')}`)
    .then((res) => this.props.login(res.data[0]))
    .catch((err) => console.log(err))
  }

    render () {
      return (
      <div>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path='/linkpage' component={Linkpage}/>
          <Route path="/carousel" component={Carousel1}/>
          <Route path="/todolist" component={Todolist}/>
          <Route path='/berita' component={Berita1}/>
          <Route path='/tablejson' component={Table1}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path="*" component={Error}/>
        </Switch>
      </div>
      )
    }
  }
  
  export default connect (null, {login}) (App)
  