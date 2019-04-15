import React from "react";
import { Text, View } from 'react-native';
import { formatPrettyDate } from '../components/common';

const Login = props => {
  const time = new Date(1551484800000);
  // const time = new Date(1555336953103);
  const prettyTime = formatPrettyDate(time);

  return <View style={styles.container}>
    <Text>Login</Text>
    <Text>Last login date: {prettyTime}</Text>
  </View>;
};

export default Login;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}