import React from 'react';
import BlogItem from './BlogItem';
import styles from './styles';

export default function BlogFeed(props) {
  const { blogs = [] } = props || {};
  console.log("blogs", blogs);
  const blogsJsx = blogs.map(blog => {
    return <BlogItem key={blog.id} blog={blog} />;
  });
  return (
    <div style={styles.blogFeed}>
      {blogsJsx}
    </div>
  )
}
