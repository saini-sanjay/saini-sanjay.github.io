import React from 'react';
import { useFormik } from 'formik';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { handleFullName,handleEmail,handlePassword,handlePasswordShown,handleValidation,submitForm } from '../Redux/reducers';


function FormComponent() {
    const formData=useSelector((state) => state.formReducer.user);
    const errors=useSelector((state) => state.formReducer.errors);
    const isPasswordShown=useSelector((state) => state.formReducer.isPasswordShown);
    const dispatch=useDispatch();
console.log("Form rendered with Data");
console.log(formData)
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      Name:formData.fullName,
      Email:formData.email,
      Password:formData.password
    }
        dispatch(submitForm(data));
    console.log("Ajax call end")
  }

    return (
        <div className='text-left transition delay-150 duration-300'>
           <hr className='my-6'></hr>
           <h1 className=' text-2xl font-bold text-gray-700 dark:text-white'>Sign in to Travelguru </h1> 
           <h3 className='py-2 text-gray-600 dark:text-gray-400'>Don't have an account ? <b className='text-red-500'>Sign Up</b></h3>
           <hr className='my-6'></hr>
    <form onSubmit={handleSubmit}>
      <input
        className="w-full px-4 py-2 text-sm border rounded-lg bg-blue-100 dark:bg-blue-100 dark:text-gray-800  focus:outline-none"
        id="fullName"
        name="fullName"
        onBlur={(e)=>{
            dispatch(handleValidation({name:e.target.name,value:e.target.value}))
            }}
        type="text"
        placeholder='Full Name'
        onChange={(event)=>dispatch(handleFullName(event.target.value))}
        value={formData.fullName}
        required
      />
      <div className='my-2 text-xs text-red-500'>{errors.fullName ?errors.fullName:<p className='my-2 text-xs' style={{visibility:'hidden'}} >Hidden</p>} </div>

     

      <input
        className="w-full px-4 py-2 text-sm border rounded-lg  focus:outline-none bg-blue-100 dark:bg-blue-100 dark:text-gray-800"
        id="email"
        name="email"
        type="email"
        placeholder='Email'
        onChange={(event)=>dispatch(handleEmail(event.target.value))}
        onBlur={(e)=>{
            dispatch(handleValidation({name:e.target.name,value:e.target.value}))
            }}
        value={formData.email}
        required
      />
      <div className='my-2 text-xs text-red-500'>{errors.email ?errors.email:<p className='my-2 text-xs' style={{visibility:'hidden'}}>Hidden</p>} </div>
      
      <div className='relative flex items-center justify-end'>
      <input
        className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none bg-blue-100 dark:bg-blue-100 dark:text-gray-800"
        id="password"
        name="password"
        type={isPasswordShown?"text":"password"}
        placeholder='Password'
        onChange={(event)=>
        dispatch(handlePassword(event.target.value))}
        onBlur={(e)=>{
            dispatch(handleValidation({name:e.target.name,value:e.target.value}))
            }}
        value={formData.password}
        required
        minLength={8}
      />
      <span className='absolute pr-2 cursor-pointer' onClick={()=>dispatch(handlePasswordShown())}>{!isPasswordShown?<FaEyeSlash />:<FaEye/>}</span>
      </div>
      <div className='my-2 text-xs text-red-500'>{errors.password ?errors.password:<p className='my-2 text-xs' style={{visibility:'hidden'}} >Hidden</p>} </div>
      

      <button type="submit"
               className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-blue"
      >Submit</button>
    </form>

        </div>
    );
}

export default FormComponent;
