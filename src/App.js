import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FirebaseContext } from "./components/Firebase";
import About from "./components/About/about";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import './App.css';

library.add(fab, faEnvelope);  

class App extends Component {
  componentDidMount() {
  }
  
  render() {
    let aboutPage = () => (
      <FirebaseContext.Consumer>
        {firebase => <About firebase={firebase}/>}
      </FirebaseContext.Consumer>);
      
    let projectPage = () => (
      <FirebaseContext.Consumer>
        {firebase => <Project firebase={firebase}/>}
      </FirebaseContext.Consumer>);
      
    let contactPage = () => (
      <FirebaseContext.Consumer>
        {firebase => <Contact firebase={firebase}/>}
      </FirebaseContext.Consumer>);
      
    return (
      <Router>
        <Route exact path="/" component={() => <Redirect to="/about"/>}/>
        <Route path="/about" component={aboutPage}/>
        <Route path="/project" component={projectPage}/>
        <Route path="/contact" component={contactPage}/>
      </Router>
    );
  }
}

export default App;
