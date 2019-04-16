import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const TestComponentItem = props => {
  const {
    student = {},
    onChangeRegistration = () => {},
  } = props || {};
  const { registered = false } = student;
  const buttonTitle = registered ? "Unregister" : "Register";
  return (
    <View>
      <Text>{student.id}</Text>
      <Button
        title={buttonTitle}
        onPress={() => onChangeRegistration(student.id)}
      />
    </View>
  )
};

export default TestComponentItem;