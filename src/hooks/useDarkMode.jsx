//2. import useLocalStorage
import { useLocalStorage } from './useLocalStorage';
//4. import { useEffect } from "react";
import { useEffect } from 'react';


//1. build a function called useDarkMode
const useDarkMode = (key) => {

//3. call useLocalStorage and pass in the key 
const [enabledDarkModeState, setEnabledDarkModeState] = useLocalStorage(`${key}`);

//5. Setup effect hook with dependency array
useEffect( () => {
    //6. 

    //6a. set up variables for dark-mode class and the element we want which is the body
    const className= 'dark-mode';
    const element = window.document.body;

    //6b. Check to see if the value from useLocalStorage is true or false; I'm checking to see if it's not undefined. If it's not undefined, add the dark-mode class; if it's undefined, remove dark-mode class. 
    {enabledDarkModeState !== 'undefined' ? element.classList.add(className) : element.classList.remove(className)}
       
}, [enabledDarkModeState]) //I put enabled in the dependency array because I only want the effect when this value changes

//7. return enabled state and setter
    return [enabledDarkModeState, setEnabledDarkModeState];
}

export default useDarkMode;