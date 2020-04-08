//2. import useLocalStorage
import useLocalStorage from './useLocalStorage';
//4. import { useEffect } from "react";
import { useEffect } from 'react';


//1. build a function called useDarkMode
const useDarkMode = (initialValue) => {

//3. call useLocalStorage and pass in the key 
const [enabledDarkModeState, setEnabledDarkModeState] = useLocalStorage("dark-mode", initialValue);

//5. Setup effect hook with dependency array
useEffect( () => {
    //6. Check to see if the value from useLocalStorage is true or false; I'm checking to see if it's not undefined. If it's not undefined, add the dark-mode class; if it's undefined, remove dark-mode class. 
    enabledDarkModeState ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    console.log(enabledDarkModeState);
       
}, [enabledDarkModeState]); //I put enabled in the dependency array because I only want the effect when this value changes

//7. return enabled state and setter
    return [enabledDarkModeState, setEnabledDarkModeState];
}

export default useDarkMode;