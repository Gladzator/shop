import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import UserField from "./UserField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class CreateUserPage extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={UserField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  signUp(e) {
    e.preventDefault();
    const user = {
      userName: e.target.username.value,
      userEmail: e.target.email.value,
      userPassword: e.target.password.value
    };
    this.props.createUser(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.signUp}>
          {this.renderFields()}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.email = validateEmails(values.email || "");
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default connect(
  null,
  actions
)(
  reduxForm({
    validate,
    form: "createUserForm"
  })(CreateUserPage)
);
