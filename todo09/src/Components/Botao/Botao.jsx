import React from 'react'
import styles from './Botao.module.css'

const Botao = ({text}) => {
    return (
      <button type='text' className={styles.Btns}>{text}</button>
    )
  }
  
  export default Botao