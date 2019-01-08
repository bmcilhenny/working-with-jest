import React from 'react';
import {Provider } from 'react-redux';
import {createStore } from 'redux';
import reducers from 'reducers';

// export default (props) => {
//   return (
//     <Provider store={createStore(reducers, props.initialState)}>
//       {props.children}
//       {/* react construct allows us to take the component we create and wrap other components  */}
//     </Provider>
//   )
// }

// object destructuring courtesy of ES6
export default ({children, initialState = {}}) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
      {/* react construct allows us to take the component we create and wrap other components  */}
    </Provider>
  )
}
