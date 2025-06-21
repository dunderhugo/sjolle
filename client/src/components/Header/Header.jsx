import styles from "./Header.module.css"

function Header({gamesName = ""}){
    return(
        <>
        <h1 className={styles.title}>{gamesName}</h1>
        </>
    )
}

export default Header;