import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  )
})

it('creates one LI for each comment', () => {

});

it('text from each comment is visible', () => {
  
})
