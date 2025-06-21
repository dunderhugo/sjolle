import { useState , useEffect} from 'react';
import './App.css';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';
import Footer from './components/Footer/Footer'
import Sudoku from './pages/Sudoku/Sudoku';
import HomePage from './pages/HomePage/HomePage'
import Wordle from './pages/Wordle/Wordle';

function App() {
  return (
    <>
    {/* <Sudoku /> */}
    {/* <HomePage/> */}
    {/* <UnderConstruction /> */}
    {/* <Footer /> */}
    <Wordle/>

    </>
  )
}

export default App
