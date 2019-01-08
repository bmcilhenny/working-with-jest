import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from 'reducers';
// ^^ works cause it assumes index.js when we import directory
// we don't need this anymore cause of Root component handles all that, our tests will now work as long as we wrap our components in tests files with Root
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  <Root>
    <App />
  </Root>
  , document.querySelector('#root'))
