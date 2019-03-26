import React from 'react';
import BlogItem from './BlogItem';
import styles from './styles';

export default function BlogFeed(props) {
  const { blogs = [], history = {} } = props || {};
  console.log("blogs props", props);
  const blogsJsx = blogs.map(blog => {
    return <BlogItem key={blog.id} blog={blog} history={history} />;
  });
  return (
    <div style={styles.blogFeed}>
      {blogsJsx}
    </div>
  )
}
