import React, { Component } from "react";

import Navbar from "../UI/Navbar/navbar";
import SectionView from "./SectionView/section-view";
import ProjectView from "./ProjectView/project-view";

import css from "./project.module.css";

export default class Project extends Component {
  _isMounted = false;
  categories = [];

  constructor(props) {
    super(props);
    this.state = { loaded:false, 
                   isShowingProject:false,
                   clickedProject:null };
    
    this.onClickHandler = this.onClickHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    let _this = this;
    let db = this.props.firebase.getDatabase();
    db.collection("projects").doc("meta").get().then(doc => {
      if (doc.exists)
        _this.categories = doc.data().categories;
      
      if (this._isMounted)
        _this.setState({ loaded:true });
    });
  }

  onClickHandler(project) {
    this.setState({ isShowingProject:true, clickedProject:project });
  }

  closeHandler() {
    this.setState({ isShowingProject:false });
  }

  render() {
    if (!this.state.loaded)
      return <></>;
    
    let sections = this.categories.map((section) => (
      <SectionView key={section} category={section} firebase={this.props.firebase}
                   containerClassName={css.SectionView}  onClickHandler={this.onClickHandler}/>
    ));

    return (
      <>
      <Navbar firebase={this.props.firebase}/>
      
      {this.state.isShowingProject ?
      <ProjectView project={this.state.clickedProject} closeHandler={this.closeHandler}/> :
      <></>
      }
      
      <div className={css.ProjectContainer}>
        <div className={css.ContentWrapper}>
          <div className={css.Title}>
            Projects
          </div>
          <div className={css.Content}>
            {sections}
          </div>
        </div>
      </div>
      </>
    );
  }
}
