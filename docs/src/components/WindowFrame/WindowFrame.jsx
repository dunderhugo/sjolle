import styles from "./WindowFrame.module.css"
import { useState, useRef } from 'react'
import { useDrag } from "./useDrag"

function WindowFrame({windowContent, title = "THIS IS THE TITLE", icon = "/images/sudoku-icon.svg", onClose}){
  const draggableRef = useRef(null)
  
  const { position, handleMouseDown } = useDrag({
    ref: draggableRef
  });

  const onMinimize = () => {
    console.log("minimize")
  }
  return(
    <div 
      className={styles.container}
      ref={draggableRef}
      style={{
        top: position.y,
        left: position.x
      }}>
      <div className={styles.titleBar} onMouseDown={handleMouseDown}>
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
  );
}

export default WindowFrame;