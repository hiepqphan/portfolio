import React, { Component } from "react";

import css from "./title-view.module.css";

export default class TitleView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.View + " " + this.props.className}>
        <div className={css.Title}>
          {"{"+this.props.title+"}"}
        </div>
        <div className={css.Content}>
          {this.props.content}
        </div>
      </div>
    );
  }
}
