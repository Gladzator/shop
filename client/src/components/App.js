import _ from "lodash";
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import CreateUserPage from "./createUser/CreateUserPage";
import Header from "./Header/Header";
import ProductNew from "./Dashboard/ProductForms/ProductNew";
import ImageForm from "./Dashboard/ImageForm";
import Dashboard from "./Dashboard/Dashboard";
import LoginForm from "./LoginPage/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signUp" component={CreateUserPage} />
            <Route exact path="/product_new" component={ProductNew} />
            <Route exact path="/image_new" component={ImageForm} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ auth, file }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
