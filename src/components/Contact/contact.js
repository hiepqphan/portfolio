import React, { Component } from "react";

import Navbar from "../UI/Navbar/navbar";
import ContactView from "./ContactView/contact-view";

import css from "./contact.module.css";

export default class Contact extends Component {
  items = [{title:"LinkedIn",
                color:"rgb(0, 119, 181)",
                link:"https://www.linkedin.com/in/hiep-phan-11b58a130",
                icon:["fab", "linkedin"]},
                {title:"GitHub",
                color:"#24292e",
                link:"https://www.github.com/hiepqphan",
                icon:["fab", "github"]},
                {title:"Email",
                color: "#009dff",
                link:"mailto:hiepqphan@hotmail.com",
                icon:"envelope"}];

  render() {
    let items = this.items.map(item => (
      <ContactView key={item.title} info={item}/>
    ));

    return (
      <>
      <Navbar firebase={this.props.firebase}/>

      <div className={css.ContactContainer}>
        <div className={css.ContentWrapper}>
          <div className={css.Title}>
            Contacts
          </div>
          <div className={css.Content}>
            {items}
          </div>
        </div>
      </div>
      </>
    );
  }
}
