import { useState , useEffect} from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Footer from './components/Footer/Footer'
import Sudoku from './components/Sudoku/Sudoku';

function App() {


  return (
    <>
    <Sudoku />
    {/* <UnderConstruction /> */}
    <Footer />
>>>>>>> main

    </>
  )
}

export default App
