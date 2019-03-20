import React from 'react';
import styles from './styles';
import Header from './header';
import { getBlogs } from './service';
import BlogFeed from './BlogFeed';

export default function App(props) {
  const blogs = getBlogs();
  return (
    <div style={styles.mainContainer}>
      <Header title="My Blog Feed" />
      <BlogFeed blogs={blogs} />
    </div>
  );
};
