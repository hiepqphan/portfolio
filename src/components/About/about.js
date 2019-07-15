import React, { Component } from "react";

import Navbar from "../UI/Navbar/navbar";
import TitleView from "./TitleView/title-view";

import css from "./about.module.css";

export default class About extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { loaded: false,
                   items: [],
                   showBackground: true,
                   mouseOnItem: null,
                   isMouseOnItem: false, };

    this.updateBackground = this.updateBackground.bind(this);
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.updateBackground);
  }

  componentDidMount() {
    this._isMounted = true;
    let _this = this;
    let _items = [];
    let db = this.props.firebase.getDatabase();
    db.collection("about").get().then(function(querySnapshot) {
      querySnapshot.forEach(doc => {
        let item = { title:doc.id, content:doc.data() };
        _items.push(item);
      });

      // Set state here to make sure that we set state AFTER loading from database
      if (_this._isMounted)
        _this.setState({ loaded:true, items:[..._items], });
    });

    this.updateBackground();
    window.addEventListener("resize", this.updateBackground);
  }

  updateBackground() {
    let width = document.body.clientWidth;
    if (width > 1000)
      this.setState({ showBackground: true });
      // container.style.backgroundSize = '200px, 250px';
    else
      this.setState({ showBackground: false });
      // container.style.backgroundSize = '0';
  }

  mouseOnItemHandler = (data) => {
    this.setState({ mouseOnItem: data, isMouseOnItem: true });
  }

  mouseLeaveHandler = () => {
    this.setState({ mouseOnItem: null, isMouseOnItem: false });
  }

  render() {
    if (!this.state.loaded)
      return <></>;

    let items = this.state.items.map((item) => (
      <TitleView className={css.Item} key={item.title} firebase={this.props.firebase} title={item.title} content={item.content.content}
                 onHoverHandler={this.mouseOnItemHandler} onMouseLeaveHandler={this.mouseLeaveHandler}
                 opacity={this.state.mouseOnItem  === item.title || !this.state.isMouseOnItem ? 1 : 0.3}/>
    ));

<<<<<<< HEAD
    let backgroundSize = "500px";
=======
    let backgroundSize = "200px, 250px";
>>>>>>> parent of dda7725... Minor UI changes

    return (
      <>
      <Navbar firebase={this.props.firebase}/>
      <div id="about-container" className={css.AboutContainer} style={{ "background-size": this.state.showBackground ? backgroundSize : "0" }}>
        <div className={css.Title}>
          {"I am a {}"}
        </div>
        <div className={css.ItemsContainer}>
          {items}
          {!this.state.showBackground && <div style={{ width: "290px" }}/>}
        </div>
      </div>
      </>
    );
  }
}
