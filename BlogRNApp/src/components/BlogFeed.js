import React from 'react';
import { View } from 'react-native';

import BlogItem from './BlogItem';
import styles from '../styles/styles';

const BlogFeed = props => {
  const { blogs = [], history = {} } = props || {};
  const blogsJsx = blogs.map(blog => {
    return <BlogItem key={blog.id} blog={blog} history={history} />;
  });
  return (
    <View style={styles.blogFeed}>
      {blogsJsx}
    </View>
  )
}

export default BlogFeed;