import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:"loginStatus",
    initialState:{
        user:null,
        messgae:'',
        isError:'',
        isButtonDisabled:''
    },
    reducers:{
        login:(state,action) => {
            state.user = action.payload;
            state.message="Logged in Successfully";
            state.isError= false
        },
        logout:(state) => {
            state.user=null;
            state.message ='Logged out successfully';
            state.isError= false
        },
        loginFailed:(state,action) => {
            state.message="Incorrect Username or Password";
            state.isError = action.payload
        },
        setIsButtonDisabled:(state,action) => {
            state.isButtonDisabled = action.payload
        }
    },

});

export const {login, logout, loginFailed, setIsButtonDisabled}=loginSlice.actions;
export default loginSlice.reducer;