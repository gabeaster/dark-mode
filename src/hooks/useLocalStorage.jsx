import React, { useState } from "react";

//1. setup a function called useLocalStorage
//1. add key and initialValue as parameters to the hook
const useLocalStorage = (key, initialValue) => {
    //2. setup state property called storedValue
    //2. a function is taken as the initial value- now, whateverr the callback function returns is what gets set as the intialValue for the state property
    const [storedValue, setStoredValue] = useState(() => {
        //3. in the callback function, check to see if the item we passed in already exists in localStorage, and return that value
            //3. otherwise, return whatever intialValue was passed in

            //3. we use the key to getItem from localStorage
        const item = window.localStorage.getItem(key);

            //3. do we get an item back? if so, parse and return the stored json; if the item is undefined, return the intialValue
        return item ? JSON.parse(item) : initialValue; 
    });

    //return the storedValue from this hook in an array
    return [storedValue];
}

export default useLocalStorage;