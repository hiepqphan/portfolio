import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FirebaseContext } from "./components/Firebase";
import About from "./components/About/about";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Wolley from "./components/Wolley/wolley";
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
        <Route exact path="/portfolio" component={() => <Redirect to="/portfolio/about"/>}/>
        <Route path="/portfolio/about" component={aboutPage}/>
        <Route path="/portfolio/project" component={projectPage}/>
        <Route path="/portfolio/contact" component={contactPage}/>
        <Route path="/portfolio/wolley" component={Wolley}/>
      </Router>
    );
  }
}

export default App;
