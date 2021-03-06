import React, { Component } from "react";

import css from "./project-view.module.css";
import { ReactComponent as IconClose } from "../../../assets/icons/x.svg";

export default class ProjectPreview extends Component {
  /* this.props.project is the 'doc' from Firestore */

  convertMonth(month) {
    switch(month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
      default:
        return "December";
    }
  }

  render() {
    let date_raw, date, linksDisplay, links;

    if (this.props.isVisible) {
      date_raw = this.props.project.date.toDate();
      date = { month:this.convertMonth(date_raw.getMonth()),
                   year:date_raw.getFullYear(), };

      linksDisplay = this.props.project.link_display;
      links = Object.keys(this.props.project.link_display).map(link => (
        <span className={css.Link}><a key={link} href={linksDisplay[link]} target="_blank" rel="noopener noreferrer">{link}</a></span>
      ));
    }

    let backgroundStyle = this.props.isVisible ? css.BackgroundDimShow : "";
    let contentStyle = this.props.isVisible ? css.ContentShow : "";

    return (
      <>
      <div className={css.ProjectViewContainer}>
        <div className={css.BackgroundDim+" "+backgroundStyle}/>
        <div className={css.Content+" "+contentStyle}>
          {this.props.isVisible ?
          <>
          <button className={css.CloseButton} onClick={this.props.closeHandler}>
            <IconClose/>
          </button>
          <div className={css.MetaData}>
            <div className={css.BasicInfo}>
              <div className={css.Title}>
                {this.props.project.title}
              </div>
              <div>
                <span className={css.SubTitle}>Status:</span> {this.props.project.status}
              </div>
              <div>
                <span className={css.SubTitle}>Date:</span> {date.month + " " + date.year}
              </div>
              <div>
                <span className={css.SubTitle}>
                  Link(s):&nbsp;
                </span>
                {links.length !== 0 ? links : <span className={css.NoLink}>No links available</span>}
              </div>
            </div>

            <div className={css.Poster}>
              <img draggable="false" src={this.props.project.poster_link} alt=""/>
            </div>
          </div>

          <div className={css.Description}>
            <p className={css.SubTitle}>
              Description:
            </p>
            <p>{this.props.project.description}</p>
          </div>
          </>
          : <></>}

        </div>
      </div>
      </>
    );
  }
}
