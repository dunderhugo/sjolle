import Header from '../../components/Header/Header';
import styles from './HomePage.module.css'


function HomePage(){


    return(

        <>
        <Header 
        gamesName='Home'/>

            <div className={styles.navContainer}>
                <div className={styles.navBtn}>Sudoku</div>
                <div className={styles.navBtn}>Wordle</div>
                <div calssName={styles.navBtnDisabled}>NYI</div>

            </div>

        </>
    );
}

export default HomePage;