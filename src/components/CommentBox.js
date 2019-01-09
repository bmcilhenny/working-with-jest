import React from 'react';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';
import * as actions from 'actions';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      cheese: "HEY"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({comment: e.target.value})
  }

  handleSubmit(e) {
    // Write a test that makes sure text area is empty when form is submitted
    e.preventDefault();
    // actions connected to props
    this.props.saveComment(this.state.comment);
    this.setState({comment: ""})
  }

  // add className to button for easier integration test simulation
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange}/>
        <div>
          <button>Submit Comment</button>
        </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>

    )
  }
};

export default connect(null, actions)(requireAuth(CommentBox));
