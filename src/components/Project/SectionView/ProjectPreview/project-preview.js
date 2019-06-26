import React, { Component } from "react";

import css from "./project-preview.module.css";

export default class ProjectPreview extends Component {
  /* this.props.project is the 'doc' from Firestore */
  _isMounted = false;
  poster_link = "";

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
    let storageRef = this.props.firebase.getStorage().ref("images/posters");
    let name = this.props.project_id+".png";
    storageRef.child(`${name}`).getDownloadURL().then(url => {
      _this.poster_link = url;
      
      if (_this._isMounted)
        _this.setState({ loaded:true });
    });

  }
  
  render() {
    if (!this.state.loaded)
      return <></>;
    
    let project = this.props.project;
    project['poster_link'] = this.poster_link;
    
    return (
      <>
      <div className={css.ProjectPreviewContainer} onClick={() => this.props.onClickHandler(project)}>
        <div className={css.Poster}>
          <img draggable="false" src={this.poster_link} alt=""/>
        </div>
        <div className={css.Title}>
          {this.props.project.title}
        </div>
      </div>
      </>
    );
  }
}