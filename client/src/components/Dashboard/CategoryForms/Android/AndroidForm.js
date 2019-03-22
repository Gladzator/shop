import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import AndroidField from "./AndroidField";
import ImageForm from "../../ImageForm";
import FormReview from "./FormReview";
import formFields from "./formFields";

class AndroidForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  state = { showFormReview: false };
  renderFields() {
    return _.map(formFields, ({ label, name, type, tag }) => {
      return (
        <Field
          key={name}
          component={AndroidField}
          type={type}
          label={label}
          name={name}
          tag={tag}
        />
      );
    });
  }

  submit(e) {
    e.preventDefault();
    this.setState(() => ({ showFormReview: true }));
  }
  cancel() {
    this.setState(() => ({ showFormReview: false }));
  }
  render() {
    return (
      <div>
        {this.state.showFormReview ? (
          <FormReview onCancel={this.cancel} />
        ) : (
          <form onSubmit={this.submit}>
            {this.renderFields()}
            <button type="submit">Next</button>
          </form>
        )}
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

export default reduxForm({
  validate,
  form: "androidForm"
})(AndroidForm);
