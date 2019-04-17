import React from "react";
import { View, Button, Text } from "react-native";

import { getUser } from "../services/service";
// import styles from "../styles/styles";

const CarItem = props => {
  const { car = {}, navigation = {} } = props || {};
  const user = getUser(car.driver) || {};
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
          <Text style={styles.profileName}>{car.maker} {car.model}</Text>
          <Text style={styles.blogItemTimestamp}>Car Model: {car.year}</Text>
        </View>
        <View style={styles.blogItemButtons}>
          <Button
            style={styles.btnEdit}
            onPress={() => {
              navigation.navigate('AddCar', { car });
            }}
            title="Edit"
          />
          <Button style={styles.btnDelete} title="Delete" />
        </View>
      </View>
      <View style={styles.blogItemMainText}>
        <Text numberOfLines={5} style={styles.blogText} >{car.text}</Text>
      </View>
    </View>
  );
};

export default CarItem;

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
