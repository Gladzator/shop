import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../../actions";
import ProductField from "./ProductField";
import formFields from "./product_basic_info_form_fields";
import categories from "./product_categories";
import CategoryFormSelector from "./CategoryFormSelector";

class ProductBasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = { category: null };
  renderFields() {
    return _.map(formFields, ({ label, name, type, tag }) => {
      return (
        <Field
          key={name}
          component={ProductField}
          type={type}
          label={label}
          name={name}
          tag={tag}
        />
      );
    });
  }
  renderCategory() {
    return _.map(categories, ({ category, no }) => {
      return (
        <option key={category} name={category} value={category}>
          {category}
        </option>
      );
    });
  }
  submit(e) {
    e.preventDefault();
    const value = e.target.category.value;
    this.setState(() => ({
      category: value
    }));
  }

  render() {
    return (
      <div>
        {this.state.category != null ? (
          <CategoryFormSelector category={this.state.category} />
        ) : (
          <form onSubmit={this.submit}>
            {this.renderFields()}
            <select name="category">
              <option value="0">Product Category</option>
              {this.renderCategory()}
            </select>
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
  form: "productForm"
})(ProductBasicInfoForm);
