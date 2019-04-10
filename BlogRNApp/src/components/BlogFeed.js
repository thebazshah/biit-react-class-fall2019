import React from 'react';
import { ScrollView, View } from 'react-native';

import BlogItem from './BlogItem';

const BlogFeed = props => {
  const { blogs = [] } = props || {};
  const blogsJsx = blogs.map(blog => {
    return <BlogItem key={blog.id} blog={blog} />;
  });
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