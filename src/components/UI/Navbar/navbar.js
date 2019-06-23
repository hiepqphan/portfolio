import React, { Component } from "react";
import { Tooltip } from "reactstrap";

import { ReactComponent as Icon_About } from "../../../assets/icons/user.svg";
import { ReactComponent as Icon_Project } from "../../../assets/icons/pen.svg";
import { ReactComponent as Icon_Contact } from "../../../assets/icons/book-user.svg";
import css from "./navbar.module.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navItemTooltip_about:false,
                   navItemTooltip_project:false,
                   navItemTooltip_contact:false,};

    this.tooltipToggle = this.tooltipToggle.bind(this);
  }

  tooltipToggle(e) {
    let section = e.target.id;

    if (section === "about")
      this.setState( {navItemTooltip_about: !this.state.navItemTooltip_about} );
    else if (section === "project")
      this.setState( {navItemTooltip_project: !this.state["navItemTooltip_"+section]} );
    else
      this.setState( {navItemTooltip_contact: !this.state["navItemTooltip_"+section]} );
  }
  
  getSection() {
    let re = new RegExp("/([a-zA-Z]+)");
    let match = (window.location.pathname).match(re);
    console.log(match);
    if (match === null) 
      return "about";
    
    return match[1];
  }

  render() {
    console.log(this.getSection());
    return (
      <div className={css.NavbarContainer}>
        <div className={css.Image}>

        </div>

        <div className={css.NavItemContainer}>
          <a href="/about">
            <div id="about" className={css.NavItem}>
              <Icon_About/>
            </div>
          </a>
          <Tooltip placement="right" isOpen={this.state.navItemTooltip_about}
                   target="about" autohide={true} fade={false} toggle={this.tooltipToggle}>
            About me
          </Tooltip>

          <a href="/project">
            <div id="project" className={css.NavItem}>
              <Icon_Project/>
            </div>
          </a>
          <Tooltip placement="right" isOpen={this.state.navItemTooltip_project}
                   target="project" autohide={true} fade={false} toggle={this.tooltipToggle}>
            Projects
          </Tooltip>

          <a href="/contact">
            <div id="contact" className={css.NavItem}>
              <Icon_Contact/>
            </div>
          </a>
          <Tooltip placement="right" isOpen={this.state.navItemTooltip_contact}
                   target="contact" autohide={true} fade={false} toggle={this.tooltipToggle}>
            Contact me
          </Tooltip>
        </div>

        <div className={css.ContactItems}>

        </div>
      </div>
    );
  }
}
