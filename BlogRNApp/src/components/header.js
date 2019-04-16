import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";

// import styles from '../styles/styles';
import { authenticate, unAuthenticate } from "../services/service";

export default function Header(props) {
  const { title = "Blog Feed", onClickAdd = () => {}, navigation = {} } = props || {};
  return (
    <View style={styles.mainHeader}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.headerActionButtons}>
        <Button
          style={styles.btnAdd}
          onPress={onClickAdd}
          title="New"
        />
        <Button onPress={() => { 
                unAuthenticate();
                navigation.navigate('AppStart');
            }} 
            style={styles.btnLogout} title="Logout" />
      </View>
    </View>
  );
}

const styles = {
  mainHeader: {
    flexDirection: "row",
    height: 60,
    width: "95%",
    backgroundColor: "#ddd",
    borderRadius: 3,
    marginBottom: 5,

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  headerTitle: {
    flex: 6,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5

    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  headerText: {
    fontSize: 20
  },
  headerActionButtons: {
    flex: 4,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "center"
    // borderStyle: "dotted",
    // borderColor: "black",
    // borderWidth: 1
  },
  btnAdd: {
    borderStyle: "dotted",
    borderColor: "black",
    borderWidth: 1
  }
};
