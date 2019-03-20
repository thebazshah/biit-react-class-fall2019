import React from 'react'
import styles from './styles'

export default function Header(props) {
  const { title = 'Blog Feed' } = props || {};
  return (
    <div style = {styles.mainHeader} >
      <div style = { styles.headerTitle }>{title}</div>
    </div>
  )
}
