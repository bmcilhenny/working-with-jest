import React from 'react';
import { mount } from 'enzyme';
// we used mount arbitarily in this case, could have just as easily used shallow
import { CommentBox } from 'components/CommentBox';
import { saveComment } from 'actions';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox saveComment={saveComment}/>
    </Root>
  );
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and two buttons', () => {
  // console.log('LENGTH',  wrapped.find('textarea').length)
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    });
    wrapped.update();
  })

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('when input is submitted textarea is emptied', () => {
    // while this line below is not necessary, we should have included it if we had not written the previous test that tests exactly that
    // expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
