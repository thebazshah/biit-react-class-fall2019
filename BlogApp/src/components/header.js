import React from 'react'
import styles from '../styles/styles'

export default function Header(props) {
  const { title = "Blog Feed", onClickAdd = () => {} } = props || {};
  return (
    <div style = {styles.mainHeader} >
      <div style = { styles.headerTitle }>{title}</div>
      <button style = { styles.btnAdd } onClick={onClickAdd}>Add</button>
    </div>
  )
}
