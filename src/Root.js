import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
// import reduxPromise from 'redux-promise';
import asnyc from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

// export default (props) => {
//   return (
//     <Provider store={createStore(reducers, props.initialState)}>
//       {props.children}
//       {/* react construct allows us to take the component we create and wrap other components  */}
//     </Provider>
//   )
// }

// object destructuring courtesy of ES6
export default ({children, initialState = {} }) => {
  // with reduxPromise middlewar we have taught redux how to deal with async action creators
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asnyc, stateValidator)
  );

  return (
    <Provider store={store}>
      {children}
      {/* react construct allows us to take the component we create and wrap other components  */}
    </Provider>
  )
}
