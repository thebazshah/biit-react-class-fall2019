import React from 'react';
import { getUser } from './service';
import styles from './styles';

export default function BlogItem(props) {
  const { blog = {} } = props || {};
  const user = getUser(blog.userId) || {};
  const { fullName = 'Muhammad' } = user;
  return (
    <div>
      <div>
        <div>{fullName[0]}</div>
        <div>User: {user.fullName}</div>
        <div>Timestamp: {blog.timestamp}</div>
      </div>
      <div>Text: {blog.text}</div>
      <div>
        <button style={styles.btnEdit} >Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
