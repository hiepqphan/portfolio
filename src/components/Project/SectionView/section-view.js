import React, { Component } from "react";

import ProjectPreview from "./ProjectPreview/project-preview";

import css from "./section-view.module.css";

export default class SectionView extends Component {
  _isMounted = false;
  projects= [];

  constructor(props) {
    super(props);
    this.state = { loaded:false, };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    let _this = this;
    let db = this.props.firebase.getDatabase();
    
    db.collection("projects").doc("meta").collection(this.props.category).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            _this.projects.push(doc); 
          });
          
          // Set state here to make sure that we set state AFTER loading from database
          if (_this._isMounted)
            _this.setState({ loaded:true });
        });

  }

  capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  render() {
    if (!this.state.loaded)
      return <></>;

    let projects = this.projects.map(project => (
      <ProjectPreview key={project.id} project={project.data()} project_id={project.id}
                      firebase={this.props.firebase} onClickHandler={this.props.onClickHandler}/>
    ));
    
    return (
      <>
      <div className={css.SectionViewContainer + " " + this.props.containerClassName}>
        <div className={css.Title}>
          {this.capitalize(this.props.category)}
        </div>
        <div className={css.Content}>
          {projects}
        </div>
      </div>
      </>
    );
  }
}