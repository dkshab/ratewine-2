import React, { Component } from "react";

class AddComment extends Component {
  state = { content: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onCreate(this.state);

    this.setState({ content: "" });
  };

  render() {
    const { content } = this.state;
    return (
      <div className="AddComment">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="content"
            placeholder="Comment"
            value={content}
            onChange={this.handleChange}
          />
          <input className="button" type="submit" value="Create Comment" />
        </form>
      </div>
    );
  }
}

export default AddComment;
