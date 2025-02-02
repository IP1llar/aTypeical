import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Main from './components/main-page'
import NavBar from './components/nav-bar'
import { useOutletContext } from "react-router-dom";

function App() {
  const [wordAmount, setWordAmount] = useState(15)
  const [speed, setSpeed] = useState(0)
  const [text, setText] = useState([]);
  const [incorrect, setIncorrect] = useState(0)
  const [KEnglish, setKEnglish] = useState(1)
  const [typingMode, setTypingMode] = useState(0);
  const [author, setAuthor ] = useState(null);
  const [reset, setReset ] = useState(true);
  const [prevInputLength, setPrevInputLength] = useState([])
  const [adjustedWPM, setAdjustedWPM] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [gameState, setGameState] = useState(null)
  const [socketState, setSocketState] = useState('')



  return (
    <div className='wholeContainer'>
    <NavBar isAuthenticated= {isAuthenticated} setIsAuthenticated = {setIsAuthenticated}/>
    <Outlet context={{ gameState, setGameState, wordAmount, setWordAmount, speed, setSpeed, text, setText,  incorrect, setIncorrect, KEnglish, setKEnglish ,typingMode, setTypingMode , author, setAuthor, reset, setReset,prevInputLength, setPrevInputLength, adjustedWPM, setAdjustedWPM, isAuthenticated, setIsAuthenticated}}/>
    </div>
  )
}
export default App;
