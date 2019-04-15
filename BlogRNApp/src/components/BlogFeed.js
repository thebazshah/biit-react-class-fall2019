import React from 'react';
import { ScrollView, View } from 'react-native';

import BlogItem from './BlogItem';

const BlogFeed = props => {
  const { blogs = [], navigation = {} } = props || {};
  const blogsJsx = blogs.map(blog => {
    return <BlogItem key={blog.id} blog={blog} navigation={navigation} />;
  });
  console.log('Blog feed props', props)
  return (
    <ScrollView style={styles.blogFeed}>
      {blogsJsx}
    </ScrollView>
  )
}

export default BlogFeed;

const styles = {
  blogFeed: {
    width: "95%",
  }
};