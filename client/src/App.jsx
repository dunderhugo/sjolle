import { useState , useEffect} from 'react';
import './App.css';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Footer from './components/Footer/Footer'
import Sudoku from './components/Sudoku/Sudoku';

function App() {


  return (
    <>
    <Sudoku />
    {/* <UnderConstruction /> */}
    <Footer />

    </>
  )
}

export default App
