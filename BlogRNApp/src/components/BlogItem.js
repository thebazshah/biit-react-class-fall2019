import React from "react";
import { View, Button, Text } from 'react-native';

import { getUser } from "../services/service";
import styles from "../styles/styles";

const BlogItem = props => {
  const { blog = {}, history = {} } = props || {};
  const user = getUser(blog.userId) || {};
  const { fullName = "Muhammad" } = user;
  return (
    <View style={styles.blogItemContainer}>
      <View style={styles.blogItemHeader}>
        <View style={styles.profilePicture}>
          <Text>{fullName[0]}</Text>
        </View>
        <View style={styles.profileName}>
          <Text style={{ fontWeight: "bold" }}>{user.fullName}</Text>
        </View>
      </View>
      <View style={styles.blogItemMainText}>
        <Text>{blog.text}</Text>
      </View>
      <View style={styles.blogItemFooter}>
        <View style={styles.blogItemTimestamp}>
          <Text>Posted on: {blog.timestamp}</Text>
        </View>
        <View style={styles.blogItemButtons}>
          <Button
            style={styles.btnEdit}
            onPress={() => history.push("/e:" + blog.id)}
            title="Edit"
          />
          <Button style={styles.btnDelete} title="Delete" />
        </View>
      </View>
    </View>
  );
};

export default BlogItem;
