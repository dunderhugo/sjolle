import styles from "./MenuIcon.module.css"

function MenuIcon({itemIcon = "https://placehold.co/400x400", itemTitle = "this is a test"}){
  return(
    <div className={styles.container}>
      <img src={itemIcon}></img>
      <p className={styles.title}>{itemTitle}</p>
    </div>
  )
}

export default MenuIcon;