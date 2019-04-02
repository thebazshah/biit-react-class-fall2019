import React from 'react';
import styles from '../styles/styles';
import { authenticate } from '../services/service';

export default function Header(props) {
  const { title = "Blog Feed", onClickAdd = () => {} } = props || {};
  return (
    <div style = {styles.mainHeader} >
      <div style = { styles.headerTitle }>{title}</div>
        <div style = { styles.headerActionButtons } >
            <button style = { styles.btnAdd } onClick={onClickAdd}>New</button>
            <button style = { styles.btnLogout } >Logout</button>
        </div>
    </div>
  )
}
