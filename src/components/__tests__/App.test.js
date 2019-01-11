import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from 'components/App';
import {CommentBox} from 'components/CommentBox';
import {CommentList} from 'components/CommentList';

let wrapped;
beforeEach(() => {
  wrapped = shallow(< App />);
})

it('shows a comment box', () => {
  // the old way, declaring a wrapped const in each test, >> const wrapped = shallow(<App />);
  // now we use the beforeEach method above to keep code DRY
  expect(wrapped.find(CommentBox).length).toEqual(1);
  // OLD WAY WITHOUT ENZYME
  // const div = document.createElement('div');
  // ReactDOM.render(< App />, div);
  // expect(div.innerHTML).toContain('Comment Box');
  // ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
  // OLD WAY WITHOUT ENZYME
  // const div = document.createElement('div');
  // ReactDOM.render(< App />, div);
  // expect(div.innerHTML).toContain('Comment Box');
  // ReactDOM.unmountComponentAtNode(div);
});
