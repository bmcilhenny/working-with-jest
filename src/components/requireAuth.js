// lower letter file name -- convention for exporting function
import React from 'react';
import { connect } from 'react-redux';

export default (childComponent) => {
  class ComposedComponent extends React.Component {

    // component just got rendered for first time
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // component just got new props (updated)
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        // any component rendered by the Route component automatically has access to this.props.history
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <childComponent {...this.props}/>
        // must add ...this.props because the connect function maps mapStateToProps and action creators to props
      )
    }
  }

  function mapStateToProps(state) {
    return {auth: state.auth}
  }

  return connect(mapStateToProps, null)(ComposedComponent);
}
