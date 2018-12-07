import React, {Fragment} from 'react';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = () => {
  return (
    <Fragment>
      <CommentBox />
      <CommentList />
    </Fragment>
  );
};

export default App;
