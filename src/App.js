import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layouts/Navbar'; //Imported Navbar file.
import UserItem from './component/Users/UserItem'; //Imported UserItem file.

// The main div element will always be "root".

class App extends Component {

  // render is the method called life cycle. look more about it.
  render() {
    const appName = 'Github Finder';
    return (
      // There must be one parent element in JSX otherwise it will not run.
      // The reason to use JSX is that it will help to reduce the complexity of the code
      // we will create different components for different sections of the app
      <div className='App'>
        {/* Div app is the parent component, everything should be inside this in order to work. */}
        <Navbar titleName={appName} />
        {/* we pass prop from outside i.e from app.js to component file(navbar.js) in this case */}
        {/* this is the way we PASS the props(properties) into the classes from app.ja to Navbar.js */}
        {/* this is the way to use the imported files from other location, basically it will put all the content of Navbar.js file here */}
        <UserItem />
        {/* this should be the file name which is getting accessed i.e UserItem.js */}

      </div>

    );

  }

}

export default App;
