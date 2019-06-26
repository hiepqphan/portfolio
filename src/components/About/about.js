import React, { Component } from "react";

import Navbar from "../UI/Navbar/navbar";
import TitleView from "./TitleView/title-view";

import css from "./about.module.css";

export default class About extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { loaded:false, 
                   items:[], };
  }

  componentWillUnmount() {
    this._isMounted = false;
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
  }

  render() {
    if (!this.state.loaded)
      return <></>;

    let items = this.state.items.map((item) => (
      <TitleView className={css.Item} key={item.title} title={item.title} content={item.content.content}/>
    ));

    return (
      <>
      <Navbar firebase={this.props.firebase}/>
      <div className={css.AboutContainer}>
        <div className={css.Title}>
          {"I am a {}"}
        </div>
        <div className={css.ItemsContainer}>
          <div className={css.Padder}/>
          {items}
        </div>
      </div>
      </>
    );
  }
}
