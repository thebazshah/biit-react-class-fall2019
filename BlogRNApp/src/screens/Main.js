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
      }, 1000);
    } else {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  };

  render() {
    console.log('props', this.props);
    const { blogs = [], loading } = this.state || {};
    const { navigation = {} } = this.props || {};
    console.log(blogs)
    let mainJsx = null;
    if (blogs.length > 0) {
      mainJsx = <React.Fragment>
        <Header title="My Blog Feed" onClickAdd={() => { }} />
        <BlogFeed blogs={blogs} navigation={navigation} />
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
      return <View style={styles.container}>
        {mainJsx}
      </View>;
    }
  }
};

export default Main;

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eee",
    marginTop: 35,
    marginBottom: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
};
