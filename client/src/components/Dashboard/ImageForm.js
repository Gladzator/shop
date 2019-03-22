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
  componentDidMount() {
    this.props.getImages();
  }
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
  renderImages() {
    return this.props.file.map(file => {
      return (
        <div key={`${file.filename}`}>
          {file.isImage && <img alt="" src={`image/${file.filename}`} />}
        </div>
      );
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
