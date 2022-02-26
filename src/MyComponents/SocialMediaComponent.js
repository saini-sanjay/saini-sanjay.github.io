import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

function SocialMediaComponent(props) {
    return (
            <div className="flex items-center justify-center">
                 <button
                    className="flex items-center justify-center px-6 py-2 text-sm bg-pink-200 border border-gray-300 rounded-lg
                     hover:border-gray-500 focus:border-gray-500 dark:bg-white

                     ">
                                    <FcGoogle size='2em'/>
                                   <p className='pl-1 font-semibold'>Sign in with Google</p> 
                 </button>
                 <button
                    className="flex items-center justify-center mx-2  px-3 py-2 text-sm bg-pink-200 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500 dark:bg-white">
                                    <FaFacebook color='blue' size='2em'/>
                                    
                 </button>
                 <button
                    className="flex items-center justify-center mx-2 px-3 py-2 text-sm bg-pink-200 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500 dark:bg-white">
                                    <FaApple  size='2em'/>
                 </button>
            
           
    

            </div>
    );
}

export default SocialMediaComponent;