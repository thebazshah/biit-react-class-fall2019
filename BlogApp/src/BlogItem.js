import React from 'react';
import { getUser } from './service';

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
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
