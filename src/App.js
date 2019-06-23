import React, { Component } from "react";

import { FirebaseContext } from "./components/Firebase";
import About from "./components/About/about";
import './App.css';

class App extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => <About firebase={firebase}/>}
      </FirebaseContext.Consumer>
    );
  }
}

export default App;
