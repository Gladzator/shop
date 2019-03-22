import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import ProductBasicInfoForm from "./ProductBasicInfoForm";

class ProductNew extends Component {
  state = { showForm: "ProductBasicInfoForm" };

  renderContent() {
    switch (this.state.showForm) {
      case "ProductBasicInfoForm":
        return <ProductBasicInfoForm />;
      default:
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(
  reduxForm({
    form: "productForm"
  })(ProductNew)
);
