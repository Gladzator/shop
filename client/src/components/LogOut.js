import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../actions";
import history from "../history";
import { persistor } from "../index";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut(e) {
    e.preventDefault();
    this.props.logoutUser();
    persistor.purge();
    document.getElementById("logout").action = "/";
    document.getElementById("logout").submit();
  }
  render() {
    return (
      <div className="container">
        <form id="logout" onSubmit={this.logOut}>
          <button type="submit">Log Out</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(LogOut);
