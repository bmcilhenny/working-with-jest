import React, {Fragment} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends React.Component {

  renderButton() {
    return this.props.auth ? <button onClick={() => this.props.changeAuth(false)}>Log out</button> : <button onClick={() => this.props.changeAuth(true)}>Log In</button>
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

  // need exact prop for root route because technically /post matches /, which will then render both components
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

export { App };

export default connect(mapStateToProps, actions)(App);
