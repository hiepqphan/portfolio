import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { FirebaseContext } from "./components/Firebase";
import About from "./components/About/about";
import './App.css';

class App extends Component {
  render() {
    let aboutPage = () => (
      <FirebaseContext.Consumer>
        {firebase => <About firebase={firebase}/>}
      </FirebaseContext.Consumer>);
      
    return (
      <Router>
        <Route path="/" component={() => <Redirect to="/about"/>}/>
        <Route path="/about" component={aboutPage}/>
        <Route path="/project" component={aboutPage}/>
        <Route path="/contact" component={aboutPage}/>
      </Router>
    );
  }
}

export default App;
