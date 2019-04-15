import React from "react";
import { View, Button, Text } from "react-native";

import { getUser } from "../services/service";
// import styles from "../styles/styles";

const BlogItem = props => {
  const { blog = {}, navigation = {} } = props || {};
  const user = getUser(blog.userId) || {};
  const { fullName = "Muhammad Shahbaz" } = user;
  return (
    <View style={styles.blogItemContainer}>
      <View style={styles.blogItemHeader}>
        <View style={styles.profilePictureContainer}>
        <View style={styles.profilePicture}>
          <Text style={styles.avatar}>{fullName[0]}</Text>
        </View>
        </View>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>{fullName}</Text>
          <Text style={styles.blogItemTimestamp}>Posted on: {blog.timestamp}</Text>
        </View>
        <View style={styles.blogItemButtons}>
          <Button
            style={styles.btnEdit}
            onPress={() => {
              navigation.navigate('EditBlog', { blog });
            }}
            title="Edit"
          />
          <Button style={styles.btnDelete} title="Delete" />
        </View>
      </View>
      <View style={styles.blogItemMainText}>
        <Text numberOfLines={5} style={styles.blogText} >{blog.text}</Text>
      </View>
    </View>
  );
};

export default BlogItem;

const styles = {
  blogItemContainer: {
    padding: 5,
    height: 180,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  blogItemHeader: {
    flexDirection: "row",
    height: "30%"

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  profilePictureContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  profilePicture: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 30
  },
  avatar: {
    fontSize: 20,
    color: "white"
  },
  profileNameContainer: {
    flex: 3,
    padding: 5

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  blogItemTimestamp: {
    fontSize: 12,
    color: "#4A4A4A"
  },
  blogItemButtons: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  btnEdit: {
    fontSize: 11
  },
  btnDelete: {
    fontSize: 11
  },
  blogItemMainText: {
    padding: 5

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  blogText: {
    textAlign: "justify",
  }
};
