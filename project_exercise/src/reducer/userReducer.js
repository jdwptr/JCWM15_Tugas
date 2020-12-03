const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN' :
            return {
                // payload sbnrnya bebas tapi udah satu kesatuan buat penamaan
                // payload ini nyambung di userAction.js
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            }
            
        case 'LOG_OUT' :
            return INITIAL_STATE
        default : 
            return state
    }
}

export default userReducer