import React from 'react'
import styles from"./ItemDetail.module.css";

export const MultilineText = ({linea}) => {
    console.log(linea)
  return (
    <div><p className={styles.descriptionText}>{linea}</p></div>
  )
}
