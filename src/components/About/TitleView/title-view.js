import React, { Component } from "react";

import css from "./title-view.module.css";

export default class TitleView extends Component {
  constructor(props) {
    super(props);
    this.state = { profile_pic: "" };

    this.getImage = this.getImage.bind(this);
  }

  getImage() {
    let _this = this;
    this.props.firebase.getStorage().ref().child(`images/about/${this.props.title}.png`).getDownloadURL().then(url => {
      _this.setState({ profile_pic:url });
    });
  }

  componentDidMount() {
    this.getImage();
  }

  render() {
    return (
      <div className={css.View + " " + this.props.className}
           style={{ opacity: this.props.opacity }}
           onMouseEnter={() => this.props.onHoverHandler(this.props.title)}
           onMouseLeave={this.props.onMouseLeaveHandler}>
        <div className={css.Image}>
          <img src={this.state.profile_pic} alt={this.props.title}/>
        </div>
        <div className={css.Title}>
          {"{"+this.props.title+"}"}
        </div>
        <div className={css.Content}>
          {this.props.content}
          <div className={css.LinkToProject}>
            <a href="/project">{"> Related Work"}</a>
          </div>
        </div>
      </div>
    );
  }
}
