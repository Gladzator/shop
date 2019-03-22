import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = { file: { name: null } };

  onChange = e => {
    this.setState({ file: e.target.files[0] });
  };
  onSubmit(e) {
    e.preventDefault();
    const file = this.state.file;
    const formData = new FormData();
    formData.append("file", file);
    this.props.fileUpload({
      formData,
      userId: this.props.auth._id,
      productId: this.props.file._id
    });
  }

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.onSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <input
            onChange={this.onChange}
            type="file"
            label="Upload"
            name="file"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ file, auth }) {
  console.log(file);
  return { file, auth };
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: "imageForm"
  })(ImageForm)
);
