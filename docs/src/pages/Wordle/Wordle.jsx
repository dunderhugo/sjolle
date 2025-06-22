import Keyboard from '../../components/KeyBoard/KeyBoard';
import styles from './Wordle.module.css'
import WordleBox from './WordleBox';
import { useEffect, useState } from 'react';
function Wordle(){
    const [wordToGuess, setWordToGuess] = useState("")
    const [guesses, setGuesses] = useState([])
    
    const fetchApi = async () => {
        try{
            const response = await fetch('https://random-word-api.vercel.app/api?words=1&length=5');
            const data = await response.json();
            setWordToGuess(data[0]);
        }
        catch(error){
            console.error("Error fetching word: ", error);
        }
    }

    useEffect(() => {
        fetchApi()
    }, []);


    return(
        <>
        <div className={styles.gameBoard}>
        
        
        
        </div>
        <Keyboard/>
        </>
    );
}

export default Wordle;