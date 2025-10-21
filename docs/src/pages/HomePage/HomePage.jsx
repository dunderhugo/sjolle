import Header from '../../components/Header/Header';
import styles from './HomePage.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import en from '../../locales/en.json';
import sv from '../../locales/sv.json';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

const language = {en, sv};

function HomePage(){
  const [userLanguage, setUserLanguage] = useState("en");
  const t = language[userLanguage];
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

  return(
    <div className={styles.body}>
      <div className={styles.home}>
      {/* <nav className={styles.navMenu}>
        <Link to="/sudoku">Sudoku</Link>
        <Link to="/" className={styles.btnDisabled}>Guess the word</Link>
      </nav> */}
      <main className={styles.main}>
        <MenuIcon></MenuIcon>
        <MenuIcon 
        itemIcon="/images/sudoku-icon.svg"
        itemTitle='Sudoku'
        />
        
      </main>
      <footer>
          
        <div className={styles.rightFooter}>
          <div className={styles.language} onClick={() => setUserLanguage(userLanguage === "en" ? "sv" : "en")}>
            {t.languageName}
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
    </div>
  );
}

export default HomePage;