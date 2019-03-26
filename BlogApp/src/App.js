import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Main from './screens/Main';
import Login from './screens/Login';
import EditBlog from './screens/EditBlog';
import styles from './styles/styles';

const App = props => {
  return (
    <Router>
      <div style={styles.mainContainer}>
        <Route path="/" exact component={Main} />
        <Route exact={true} path="/l" component={Login} />
        <Route exact={true} path="/e" component={EditBlog} />
        <Route exact={true} path="/e:blogId" component={EditBlog} />
      </div>
    </Router>
  );
};

export default App;
