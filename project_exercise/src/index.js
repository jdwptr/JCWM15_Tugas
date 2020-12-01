import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

// import react rooter dom
import { BrowserRouter } from 'react-router-dom';

// import createStore
import { createStore } from 'redux'

// import provide
import { Provider } from 'react-redux'

// import combined reducers (tdk usah dikasih alamat index.js reducer nya karena otomatis)
import allReducers from './reducer'

// buat variabel untuk createStore
const globalState = createStore (allReducers)

// subscribe variabel globalState untuk console.log redux setiap kali react dipanggil
globalState.subscribe(() => console.log("Global State : ", globalState.getState ()))

ReactDOM.render(
  <Provider store={globalState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
