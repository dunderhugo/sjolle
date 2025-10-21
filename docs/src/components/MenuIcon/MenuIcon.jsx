import styles from "./MenuIcon.module.css"
import { useState } from 'react'

function MenuIcon({itemIcon = "https://placehold.co/400x400", itemTitle = "this is a test", onOpen}){
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () =>{
    setIsSelected(true)
  };

  const handleDoubleClick = () =>{
    if(onOpen) onOpen()
  };

  const handleBlur = () =>{
    setIsSelected(false)
  };

  const containerClasses = `
  ${styles.iconContainer}
  ${isSelected ? styles.selected : ''}
  `;
  
  return(
    <div 
      className={containerClasses}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      tabIndex="0"
    >
      <img src={itemIcon}></img>
      <span className={styles.title}>{itemTitle}</span>
    </div>
  )
}

export default MenuIcon;