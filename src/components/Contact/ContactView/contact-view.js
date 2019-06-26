import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./contact-view.module.css";

export default class ContactView extends Component {
  render() {
    return (
      <>
      <div className={css.ContactViewContainer}>
        <a href={this.props.info.link} target="_blank">
          <div className={css.IconContainer} style={{background:this.props.info.color}}>
            <FontAwesomeIcon icon={this.props.info.icon}/>
          </div>
          <div className={css.Title}>
            {this.props.info.title}
          </div>
        </a>
      </div>
      </>
    );
  }
}