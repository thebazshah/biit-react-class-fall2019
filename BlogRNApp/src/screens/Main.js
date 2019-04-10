import React from "react";
import { View, ScrollView, Text } from 'react-native';

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
    console.log('isAuth', isAuthenticated);
    if (!isAuthenticated) {
      await authenticate('test1', 'test1');
    }
    await this.getBlogsFromApi();
  };

  getBlogsFromApi = async () => {
    const blogs = await getBlogs();
    if (blogs) {
      setTimeout(() => {
        this.setState({ blogs, loading: false });
      },1000);
    } else {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  };

  render() {
    const { blogs = [], loading } = this.state || {};
    console.log(blogs)
    let mainJsx = null;
    if (blogs.length > 0) {
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
    if (loading) {
      return (<View>
        <Text>Loading...</Text>
      </View>);
    } else {
      return mainJsx;
    }
  }
};

export default Main;
