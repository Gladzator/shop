import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import productFormFields from "../../ProductForms/product_basic_info_form_fields";
import androidFormFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../../actions";
import ImageForm from "../../ImageForm";

const cat = { category: "android" };
const FormReview = ({
  onCancel,
  userId,
  productFormValues,
  androidFormValues,
  submitProduct,
  history
}) => {
  const reviewProductFields = _.map(productFormFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{productFormValues[name]}</div>
      </div>
    );
  });

  const reviewAndroidFields = _.map(androidFormFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{androidFormValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewProductFields}
      {reviewAndroidFields}
      <button onClick={onCancel}>Back</button>
      <button
        onClick={() =>
          submitProduct(
            {
              user_id: userId,
              ...productFormValues,
              ...androidFormValues,
              ...cat
            },
            history
          )
        }
      >
        Submit
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userId: state.auth._id,
    productFormValues: state.form.productForm.values,
    androidFormValues: state.form.androidForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(FormReview));
