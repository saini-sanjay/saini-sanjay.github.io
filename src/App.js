import './App.css';

import FormComponent from './MyComponents/FormComponent';
import SideImageComp from './MyComponents/SideImageComp';
import SocialMediaComponent from './MyComponents/SocialMediaComponent';
import ToggleComponent from './MyComponents/ToggleComponent';
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';


function App() {
  const toggle = useSelector((state) => state.formReducer.isDarkModeOn);
  return (
    <div className="App">  
      <div className="flex items-center justify-center min-h-screen bg-blue-100 dark:bg-gray-800">
           
      <SwitchTransition mode='out-in'>
        <CSSTransition
       key={toggle}
       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
       classNames='fade'
     >
          <SignUpComponent/>
        </CSSTransition>
   </SwitchTransition>
      
        </div>

  </div>
  );

  
}

export const SignUpComponent=()=>{
  return (
    <div className="flex h-fit max-w-5xl mx-auto my-6 bg-blue-100 dark:bg-gray-800 shadow-3xl">
    <div className="flex flex-col md:flex-row">       
        <SideImageComp/>
        <div className="flex p-2 sm:p-12 md:w-1/2 bg-blue-50 dark:bg-slate-700  md:rounded-r-3xl" >   {/** i made changes in the class */}
            <div className="w-full" >
            
                <ToggleComponent/>
                <FormComponent/>
                <hr className="my-8" />
                <SocialMediaComponent/>
                
            </div>
        </div>
    </div>
</div>
  );
}



export default App;