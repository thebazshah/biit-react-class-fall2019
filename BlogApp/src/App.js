import React from 'react';
import styles from './styles';
import Header from './header';

export default function App(props) {
  return (
    <div style={styles.mainContainer}>
      <Header title="My Blog Feed" />
    </div>
  );
};
