import React from 'react';
//step 3: 1. import dark mode hook into navBar component
import useDarkMode from '../hooks/useDarkMode';

//functional Navbar component
const Navbar = () => {

  //state for darkMode with state being defaulted to false
  const [darkMode, setDarkMode] = useDarkMode('false');


  //toggle function passing an event as an argument; 
  const toggleMode = e => {
    //  prevent default prevents rerender.
    e.preventDefault();
    //setDarkMode will toggle state to the opposite of it's current state
    setDarkMode(!darkMode);
  };

  //component returns a navbar with an h1, a div for the toggle that when clicked will toggle darkmode
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
