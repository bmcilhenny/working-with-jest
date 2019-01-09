import React, {Fragment} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component {

  renderButton() {
    return this.props.auth ? <button>Log out</button> : <button>Log In</button>
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render() {
    return (
      <Fragment>
      {this.renderHeader()}
        <Route path='/post' component={CommentBox}/>
        <Route path='/' exact component={CommentList}/>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, null)(App);
