import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = () => {
  return (
    <Fragment>
      <Route path='/post' component={CommentBox}/>
      <Route path='/' exact component={CommentList}/>
    </Fragment>
  );
};

export default App;
