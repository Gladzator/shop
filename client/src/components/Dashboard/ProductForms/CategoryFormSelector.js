import React, { Component } from "react";
import AndroidForm from "../CategoryForms/Android/AndroidForm";
import FoodForm from "../CategoryForms/FoodForm";

class CategoryFormSelector extends Component {
  renderContent() {
    switch (this.props.category) {
      case "android":
        return <AndroidForm />;
      case "food":
        return <FoodForm />;
      default:
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default CategoryFormSelector;
