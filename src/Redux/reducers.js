import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const submitForm=createAsyncThunk('userSubmit', async(userData)=>{
  
  return axios.post( 'https://jsonplaceholder.typicode.com/users',userData).then((res) => res);
})

const initialUser={
  fullName: '',
  email:'',
  password:'',
}


export const signUpFormReducer = createSlice({
  name: 'formReducer',
  initialState:{
    user:initialUser,
    isDarkModeOn:false,
    isPasswordShown:false,
    newUserCreated:{
      successUser:false,
      userName:''
    },
    errors:{
        fullName:'',
        email:'',
        password:''
    }
  },
  reducers: {
    handleFullName: (state,action) => {
      state.user.fullName=action.payload;
    },
    handleEmail: (state,action) => {
      state.user.email=action.payload;
    },
    handlePassword: (state, action) => {
      state.user.password= action.payload
    },
    handleDarkMode:(state)=>{
        state.isDarkModeOn=!state.isDarkModeOn;
    },
    handlePasswordShown:(state)=>{
        state.isPasswordShown= !state.isPasswordShown;
        
    },
    handleModalClose:(state)=>{
      state.newUserCreated.successUser=false;
      state.newUserCreated.userName='';
    },
    
    handleValidation:(state,action)=>{
         const {name,value}=action.payload;
         if(name==='fullName'){
            state.errors.fullName='';
            if (!value) {
                state.errors.fullName = 'Required';
              }
               
         }
         if(name==='email')
         {
            state.errors.email ='';
         if (!value) {
            state.errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            state.errors.email = 'Invalid email address';
          }
          
        }
        if(name==='password'){
            state.errors.password ='';
            if (!value) {
                state.errors.password = 'Required';
              } else if (value.length <8) {
                state.errors.password = 'Password must be at least 8 Characters long';
              }
              
        }
    }
  },
  extraReducers:{
    [submitForm.pending]:(state,action)=>{
      console.log("User Submission in Progress")
    },
    [submitForm.fulfilled]:(state,action)=>{
      console.log("User submission successful");
      state.newUserCreated.successUser=true;
      state.newUserCreated.userName=action.payload.data.Name;
      state.user=initialUser;
      
    },
    [submitForm.rejected]:(state,action)=>{
       console.log("User rejected");
    }
  }
})

// Action creators 
export const { handleFullName,handleEmail,handlePassword,handleDarkMode,handlePasswordShown,handleValidation,handleTransition,handleModalClose } = signUpFormReducer.actions

export default signUpFormReducer.reducer