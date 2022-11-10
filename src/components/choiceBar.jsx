import { useState, useRef, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import APIservice from '../APIService/index'
import "../css//choiceBar.css";

export default function Bar({ changeWordAmount, setCheckInput }) {
  const { wordAmount, setWordAmount } = useOutletContext();
  const { KEnglish, setKEnglish } = useOutletContext();
  const {typingMode, setTypingMode } = useOutletContext()
  const { text, setText } = useOutletContext();
  const { author, setAuthor } = useOutletContext();
  const {   reset, setReset  } = useOutletContext();


  useEffect(() => {
    wordOrQuote(5)

  }, [typingMode, KEnglish])


 async function getQuotes(length) {
    const data = await APIservice.FetchQuotes(length)
    let quote = data.content.split("")
    quote = quote.map((letter) => {
        return { letter: letter, correct: "neutral", active: "false" };
      });
    setText(quote)
    setAuthor(data.author)
  }

  async function getWords(num) {
    const data = await APIservice.fetchEnglishK(KEnglish, num);
    setText(data)
  }



  async function wordOrQuote(num , num2, num3) {
    if(typingMode === 0) {
        setWordAmount(num)
        getWords(num)
    }
    if(typingMode === 1) {
        getQuotes(num2 , num3)
    } 

    if(typingMode === 2) {
        setWordAmount(num)
        getWords(num)
    }

    setCheckInput(0)
    setReset(num => num= num+1)
  }
  
  return (
    <div className="choiceBar">
      <button onClick={() => setTypingMode(0)}> WORDS </button>
      <button onClick={() => setTypingMode(1)}> QUOTE </button>
      <div className="spacer"></div>
      <button onClick={() => wordOrQuote(100, 250, 350)}> SCHLONGGGG </button>
      <button onClick={() => wordOrQuote(50, 150, 230)}> THICC </button>
      <button onClick={() => wordOrQuote(30, 20, 70)}> SHORT </button>
   

      {typingMode === 0 ? 
      <>
           <div className="spacer"></div>
      <button onClick={() => setKEnglish(10)}> HARD </button>
      <button onClick={() => setKEnglish(1)}> EASY </button>
      <button onClick={() => setKEnglish(5)}> MEDIUM </button>
      </>
      : null }
    </div>
  );
}
