import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import UserField from "./UserField";
import formFields from "./formFields";
import { persistor } from "../../index.js";
import history from "../../history";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          id={name}
          key={name}
          component={UserField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  login(e) {
    e.preventDefault();
    const user = {
      userName: e.target.username.value,
      userPassword: e.target.password.value
    };
    this.props.loginUser(user);
    history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <form id="login" name="login" onSubmit={this.login}>
          {this.renderFields()}
          {this.props.auth === false ? (
            <h3>Please enter correct password</h3>
          ) : (
            <h3 />
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    validate,
    form: "loginForm"
  })(LoginForm)
);
