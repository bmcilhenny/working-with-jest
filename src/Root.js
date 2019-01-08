import React from 'react';
import {Provider } from 'react-redux';
import {createStore } from 'redux';
import reducers from 'reducers';

export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
      {/* react construct allows us to take the component we create and wrap other components  */}
    </Provider>
  )
}
