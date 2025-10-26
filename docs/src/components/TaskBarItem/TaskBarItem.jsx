import styles from './TaskBarItem.module.css'
import { useState, useEffect } from 'react';


function TaskBarItem({ icon = "/images/github-mark-white.svg", title = "GitHub page" }) {

  const handleClick = () => {
    // Currently hardcoded to open sjolle github page
    // Will change later, to open different links or applications
    window.open("https://github.com/dunderhugo/sjolle", "_blank");
  }

  return(
    <div className={styles.container}>
      <div className={styles.taskBarItem} onClick={handleClick}>
        <img src={icon} alt={title} className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
}

export default TaskBarItem;