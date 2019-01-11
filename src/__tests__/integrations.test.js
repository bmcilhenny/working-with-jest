import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  // moxios will intercept any axios request and respond to it with some data, tricking it to think it actually got something back
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    // must trick with 200 success status
    // and give it a fake response
    status: 200,
    response: [{name: 'fetched  #1'}, {name: 'fetched #2'}]
  });
});

afterEach(() => {
  // makes sure we dont reuse the stubRequest inside of our entire test suite
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // attempt to render entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the fetch comments button and click
  wrapped.find('.fetch-comments').simulate('click');
  // expect to find a list of comments
  // without a pause currently getting 0, because Jest is running react project in the fake jsdom, were not actually making a network request so you cant call .data.map(comment) on something undefined
  // must introduce a tiny pause

  // setTimeout(() => {
  //   // once you simulate something you need to force fake jdom to rerender with the new components( comments added to CommentList)
  //   wrapped.update();
  //   expect(wrapped.find('li').length).toEqual(2);
  //   // hits this, waits 100 miliseconds, then calls done()
  //   done();
  //   wrapped.unmount();
  // }, 100);

  // instead of using setTimeout can use moxios.wait, it might take longer than 100 miliseconds to kick in, might take more time. this will wait till finished.
  moxios.wait(() => {
    // once you simulate something you need to force fake jdom to rerender with the new components( comments added to CommentList)
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    // hits this, waits 100 miliseconds, then calls done()
    done();
    wrapped.unmount();
  });
  // cause Jest runs code from top to bottom without any consideration for delayed events
  // this might be a false positive, to get around this
  // can pass done function callback to arrow function, by introducing done tells Jest to wait till done() is invoked

})
