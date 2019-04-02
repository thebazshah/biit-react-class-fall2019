import React from "react";

import { getBlogs } from "../services/service";
import BlogFeed from "../components/BlogFeed";
import Header from "../components/header";

const Main = async props => {
  const { history = {} } = props;
  const blogs = await getBlogs();
  console.log('blogs', blogs);
  return (
    <React.Fragment>
      <Header title="My Blog Feed" onClickAdd={() => history.push("/e")} />
      <BlogFeed blogs={blogs} history={history} />
    </React.Fragment>
  );
};

export default Main;
