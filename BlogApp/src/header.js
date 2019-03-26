import React from 'react'
import styles from './styles'

export default function Header(props) {
  console.log(props)
  const { title = "Blog Feed", onClickAdd = () => {} } = props || {};
  return (
    <div style = {styles.mainHeader} >
      <div style = { styles.headerTitle }>{title}</div>
      <button onClick={onClickAdd}>Add</button>
    </div>
  )
}
