import styles from './HomePage.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';
import WindowFrame from '../../components/WindowFrame/WindowFrame';
import Sudoku from '../Sudoku/Sudoku';
import { useTranslation } from 'react-i18next';
import TaskBarItem from '../../components/TaskBarItem/TaskBarItem';


function HomePage(){
  const { t, i18n } = useTranslation();
  const [userLanguage, setUserLanguage] = useState("en");
  const [currentTime, setCurrentTime] = useState(Date());
  const [currentDate, setCurrentDate] = useState(Date());
  const [showSlider, setShowSlider] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      if (userLanguage === "en") {
        setCurrentDate(now.toLocaleDateString("en-US"))
        setCurrentTime(now.toLocaleTimeString("en-US", { hour12: true }))
      } else {
        setCurrentDate(now.toLocaleDateString("sv-SE"))
        setCurrentTime(now.toLocaleTimeString("sv-SE", { hour12: false }))
      }
    }

    updateDateTime()
    const intervalId = setInterval(updateDateTime, 1000)

    return () => clearInterval(intervalId)
  }, [userLanguage])

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value))
    // if <audio> element
    // audioRef.current.volume = e.target.value / 100;
  }
  const handleOpenSudoku = () =>{
    console.log("Opening sudoku...")
  }

  return(
    <div className={styles.body}>
      <img className={styles.backgroundImage} src="/images/windows-xp.jpg"/>
      <img className={styles.workInProgress} src="/images/work-in-progress.png" alt="Under Construction"/>

      <main className={styles.main}>
        {/* <MenuIcon/>
        <MenuIcon 
        itemIcon="/images/sudoku-icon.svg"
        itemTitle='Sudoku'
        onOpen={handleOpenSudoku}
        /> */}
        <WindowFrame 
          windowContent={<Sudoku/>}
          title={t('sudoku.name')}
          icon={"/images/sudoku-icon.svg"}
        />
      </main>
      <footer>
        <div className={styles.leftFooter}>
          <TaskBarItem/>
        </div>
        <div className={styles.rightFooter}>
          <div 
              className={styles.language} 
              onClick={() => {
                const newLang = userLanguage === "en" ? "sv" : "en";
                setUserLanguage(newLang);
                i18n.changeLanguage(newLang);
              }}
            >
              {t('languageName')}
            </div>
          <div className={styles.volumeControl}>
            <img 
              src="/images/audioIcon.svg" 
              className={styles.audioIcon} 
              alt="Audio Icon"
              onClick={() => setShowSlider(!showSlider)}
            />
            {showSlider && (
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={volume}
                onChange={handleVolumeChange}
                className={styles.slider}
              />
            )}
            </div>
            <div className={styles.dateTime}>
              <p>{currentTime}</p>
              <p>{currentDate}</p>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default HomePage;