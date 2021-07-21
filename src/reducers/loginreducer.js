const redux = require('redux')

export function login(){
    type:'login',
    payload
}

export function logout(){
    type:login
}

const login = 'login'
const logout = 'logout'
const loginFailed = 'loginFailed'
const setIsButtonDisabled = 'setIsButtonDisabled'

export default (state = initialState, action) => {
    switch(action.type){
        case login: return{
            ...state,
            user: action.payload
        }
        case logout: return{
            ...state,
            user:null
        }
        case loginFailed:return{
            ...state,
            message = "Incorrect username or password",
            isError=action.payload
        }
        case setIsButtonDisabled: return{
            ...state,
            isButtonDisabled= action.payload
        }
        default:
            return state
    }
}