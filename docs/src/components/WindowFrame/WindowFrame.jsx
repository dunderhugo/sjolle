import styles from "./WindowFrame.module.css"
import { useState } from 'react'

function WindowFrame({windowContent, title = "THIS IS THE TITLE", icon = "/images/sudoku-icon.svg", onClose}){
  const onMinimize = () => {
    console.log("minimize")
  }
  return(
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <div className={styles.windowInfo}>
          <img src={icon}></img>
          <span>{title}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={onMinimize} className={styles.minimizeBtn}>_</button>
          <button onClick={onClose} className={styles.closeBtn}>X</button>
        </div>
      </div>
      <div className={styles.content}>
        {windowContent}
      </div>

    </div>
  )
}

export default WindowFrame;