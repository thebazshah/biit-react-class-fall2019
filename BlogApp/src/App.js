import React from "react";
import styles from "./styles";
import Header from "./header";
import { getBlogs } from "./service";
import BlogFeed from "./BlogFeed";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function Index(props) {
  const { history = {} } = props;
  const blogs = getBlogs();
  return (
    <div style={styles.mainContainer}>
      <Header
        title="My Blog Feed"
        onClickAdd={() => {
          history.push("/e");
        }}
      />
      <BlogFeed blogs={blogs} history={history} />
    </div>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Edit(props) {
  const { match = {} } = props;
  const { params = {} } = match;
  const { blogId = null } = params;
  return <React.Fragment>
    <h2>Edit Blog</h2>
    <div>{blogId === null ? "No blogId passed" : "blogId: " + blogId}</div>
  </React.Fragment>;
}

export default function App(props) {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route exact={true} path="/l" component={Login} />
        <Route exact={true} path="/e" component={Edit} />
        <Route exact={true} path="/e:blogId" component={Edit} />
      </div>
    </Router>
  );
}
