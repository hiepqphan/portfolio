import React, { Component } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as IconAbout } from "../../../assets/icons/user.svg";
import { ReactComponent as IconProject } from "../../../assets/icons/pen.svg";
import { ReactComponent as IconContact } from "../../../assets/icons/book-user.svg";
import { ReactComponent as IconMenu } from "../../../assets/icons/three-lines.svg";
import css from "./navbar.module.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navItemTooltip_about: false,
                   navItemTooltip_project: false,
                   navItemTooltip_contact: false,
                   profile_pic: "",
                   showNavBar: true,
                   isMenuShown: false, };

    this.tooltipToggle = this.tooltipToggle.bind(this);
    this.getUserProfileURL = this.getUserProfileURL.bind(this);
    this.updateSize = this.updateSize.bind(this);
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
    if (match === null)
      return "about";

    return match[1];
  }

  getUserProfileURL() {
    let _this = this;
    this.props.firebase.getStorage().ref().child("images/profile_image_default.png").getDownloadURL().then(url => {
      _this.setState({ profile_pic:url });
    });

//    this.props.firebase.getStorage().ref("images/posters").listAll().then(res => {
//      console.log(res);
//    });
  }

  componentDidMount() {
    this.getUserProfileURL();
    this.updateSize();
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }

  updateSize() {
    let width = document.body.clientWidth;
    if (width > 645)
      this.setState({ showNavBar: true });
    else
      this.setState({ showNavBar: false });
  }

  toggleMenu = () => {
    this.setState({ isMenuShown: !this.state.isMenuShown });
  }

  render() {
    let selected = { about:false,
                     project:false,
                     contact:false, };
    selected[this.getSection()] = true;
    let sections = [selected.about ? " " + css.Selected : "",
                    selected.project ? " " + css.Selected : "",
                    selected.contact ? " " + css.Selected : ""];

    if (this.state.showNavBar)
      return (
        <div className={css.NavbarContainer}>
          {
          // <div className={css.Image} style={{"backgroundImage":"url(\"" + this.state.profile_pic + "\")"}}>
          //
          // </div>
          }
          <div style={{ height: 100 }}/>

          <div className={css.NavItemContainer}>
            <a href="/about">
              <div id="about" className={css.NavItem + sections[0]}>
                <IconAbout/>
              </div>
            </a>
            <Tooltip placement="right" isOpen={this.state.navItemTooltip_about}
                     target="about" autohide={true} fade={false} toggle={this.tooltipToggle}>
              About me
            </Tooltip>

            <a className={css.MiddleNavItem} href="/project">
              <div id="project" className={css.NavItem + sections[1]}>
                <IconProject/>
              </div>
            </a>
            <Tooltip placement="right" isOpen={this.state.navItemTooltip_project}
                     target="project" autohide={true} fade={false} toggle={this.tooltipToggle}>
              Projects
            </Tooltip>

            <a href="/contact">
              <div id="contact" className={css.NavItem + sections[2]}>
                <IconContact/>
              </div>
            </a>
            <Tooltip placement="right" isOpen={this.state.navItemTooltip_contact}
                     target="contact" autohide={true} fade={false} toggle={this.tooltipToggle}>
              Contacts
            </Tooltip>
          </div>

          <div className={css.ContactItems}>
            <a href="https://www.github.com/hiepqphan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "github"]}/>
            </a>

            <a href="https://www.linkedin.com/in/hiep-phan-11b58a130" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin"]}/>
            </a>

            <a href="mailto:hiepqphan@hotmail.com">
              <FontAwesomeIcon icon="envelope"/>
            </a>
          </div>
        </div>
      );
    else
      return (
        <div className={css.NavItemContainer_alt}>
          <div className={css.Title_alt}>
            {this.getSection()}
          </div>
          <div className={css.MenuIcon_alt} onClick={this.toggleMenu}><IconMenu/></div>
          {true &&
          <div className={css.Menu_alt} style={{ height: this.state.isMenuShown ? "264px" : 0 }}>
            <a href="/about">
              about
            </a>

            <a className={css.MiddleNavItem} href="/project">
              project
            </a>

            <a href="/contact">
              contacts
            </a>

            <a href="https://www.github.com/hiepqphan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "github"]}/>
            </a>

            <a href="https://www.linkedin.com/in/hiep-phan-11b58a130" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin"]}/>
            </a>

            <a href="mailto:hiepqphan@hotmail.com">
              <FontAwesomeIcon icon="envelope"/>
            </a>
          </div> }
        </div>
      );
  }
}
