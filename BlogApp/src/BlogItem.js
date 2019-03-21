import React from "react";
import { getUser } from "./service";
import styles from "./styles";

export default function BlogItem(props) {
  const { blog = {} } = props || {};
  const user = getUser(blog.userId) || {};
  const { fullName = "Muhammad" } = user;
  return (
    <div style={styles.blogItemContainer}>
      <div style={styles.blogItemHeader}>
        <div style={styles.profilePicture}> {fullName[0]} </div>
        <div style={styles.profileName}>
          <b> {user.fullName} </b>
        </div>
      </div>
      <div style={styles.blogItemMainText}> {blog.text} </div>
      <div style={styles.blogItemFooter}>
        <div style={styles.blogItemTimestamp}>
          Posted on: March 20, 2019{/*blog.timestamp*/}
        </div>
        <div style={styles.blogItemButtons}>
          <button style={styles.btnEdit}> Edit </button>
          <button style={styles.btnDelete}> Delete </button>
        </div>
      </div>
    </div>
  );
}
