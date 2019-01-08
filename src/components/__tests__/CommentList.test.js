import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'root';

let wrapped;
beforeEach(() => {

  const initialState = {
    comments: ['Hey there bingo', 'WooO Bessy, settle down!']
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one LI for each comment', () => {
  // console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
});

it('text from each comment is visible', () => {
  expect(wrapped.render().text()).toContain('Hey there bingo');
  expect(wrapped.render().text()).toContain('WooO Bessy, settle down!');
})
