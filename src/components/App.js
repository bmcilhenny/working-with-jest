import React, {Fragment} from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App = () => {
  return (
    <Fragment>
      <CommentBox />
      <CommentList />
    </Fragment>
  );
};

export default App;
