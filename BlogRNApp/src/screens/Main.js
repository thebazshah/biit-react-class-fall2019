import React from "react";
import { View, Text } from 'react-native';

import { authenticate, getBlogs, isUserAuthenticated } from "../services/service";
import BlogFeed from "../components/BlogFeed";
import Header from "../components/header";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
    };
  }

  componentDidMount = async () => {
    const isAuthenticated = await isUserAuthenticated();
    if (!isAuthenticated) {
      await authenticate('test1', 'test1');
    }
    await this.getBlogsFromApi();
  };

  getBlogsFromApi = async () => {
    const blogs = await getBlogs();
    if (blogs) {
      this.setState({ blogs, loading: false });
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    let mainJsx = null;
    if (this.state.blogs.length > 0) {
      mainJsx = <React.Fragment>
        <Header title="My Blog Feed" onClickAdd={() => { }} />
        <BlogFeed blogs={blogs} />
      </React.Fragment>;
    } else {
      mainJsx = (<React.Fragment>
        <View>
          <Text>No blogs found.</Text>
        </View>
      </React.Fragment>);
    }
    return mainJsx;
  }
};

export default Main;
