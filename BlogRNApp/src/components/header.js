import React from 'react';
import { View, Button, Text } from 'react-native';

import styles from '../styles/styles';
import { authenticate } from '../services/service';

export default function Header(props) {
  const { title = "Blog Feed", onClickAdd = () => {} } = props || {};
  return (
    <View style = {styles.mainHeader} >
      <View style = { styles.headerTitle }>
        <Text>{title}</Text>
      </View>
        <View style = { styles.headerActionButtons } >
            <Button style = { styles.btnAdd } onPress={onClickAdd} title="New" />
            <Button style = { styles.btnLogout } title="Logout" />
        </View>
    </View>
  )
}
