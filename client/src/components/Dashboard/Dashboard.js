import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import LogOut from "../LogOut";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { file: props.file };
  }
  componentWillMount() {
    if (this.props.auth != null) {
      this.props.fetchProducts({ user_id: this.props.auth._id });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.file === this.props.file) {
      console.log("hi");
      this.props.fetchProducts({ user_id: this.props.auth._id });
    }
  }
  renderImages = () => {
    if (this.props.file.constructor !== Array) {
      return (
        <div key={`${this.props.file.productimage}`}>
          {<img alt="" src={`image/${this.props.file.productimage}`} />}
        </div>
      );
    }
    return this.props.file.map(file => {
      return (
        <div key={`${file.productimage}`}>
          {<img alt="" src={`image/${file.productimage}`} />}
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <LogOut />
        {this.renderImages()}
      </div>
    );
  }
}

function mapStateToProps({ file, auth }) {
  console.log(file);
  return { file: file === null ? [] : file, auth };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
