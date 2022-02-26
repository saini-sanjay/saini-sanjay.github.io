import React from 'react';
import dayImage from '../images/day.jpg';
import nightImage from '../images/day-2.jpg';
import { useSelector } from 'react-redux';


function SideImageComp() {
    const isDarkMode=useSelector((state) => state.formReducer.isDarkModeOn)
    if(isDarkMode){
        return (
        
            <div className="h-32 md:h-auto md:w-4/6">
                        <img className="object-cover w-full h-full md:rounded-l-3xl" src={nightImage}
                            alt="img" />
            </div>
        
    );

    }
    return (
        
            <div className="h-32 md:h-auto md:w-4/6 ">
                        <img className="object-cover w-full h-full md:rounded-l-3xl" src={dayImage}
                            alt="img" />
            </div>
        
    );
}

export default SideImageComp;