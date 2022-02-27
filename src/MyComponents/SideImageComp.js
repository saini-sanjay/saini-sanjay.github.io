import React from 'react';
import dayImage from '../images/day.jpg';
import nightImage from '../images/day-2.jpg';
import { useSelector } from 'react-redux';


function SideImageComp() {
    const isDarkMode=useSelector((state) => state.formReducer.isDarkModeOn)
    const displayImage=isDarkMode?nightImage:dayImage;
        return (
        
            <div className="h-32 md:h-auto md:w-7/12">
                        <img className="object-cover w-full h-full md:rounded-l-3xl " src={displayImage}
                            alt="img" />
            </div>
        
     );
}

export default SideImageComp;