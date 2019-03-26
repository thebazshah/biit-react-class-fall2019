import React from 'react';
import BlogItem from './BlogItem';
import styles from '../styles/styles';

const BlogFeed = props => {
  const { blogs = [], history = {} } = props || {};
  const blogsJsx = blogs.map(blog => {
    return <BlogItem key={blog.id} blog={blog} history={history} />;
  });
  return (
    <div style={styles.blogFeed}>
      {blogsJsx}
    </div>
  )
}

export default BlogFeed;