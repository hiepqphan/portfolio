import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

import css from "./wolley.module.css";

export default class Wolley extends Component {
  constructor(props) {
    super(props);
    this.game = new UnityContent("/Wolley/wolley.json", "/Wolley/UnityLoader.js");
  }

  render() {
    return (
      <div className={css.GameWrapper}>
        <div className={css.GameContainer}>
          <Unity unityContent={this.game}/>
        </div>
      </div>
    )
  }
}
