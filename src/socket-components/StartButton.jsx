import './css/StartButton.css'
import { useState, useEffect} from "react";
import socket from "./socketConfig";



export default function StartButton({player, isHost, gameStart, setGameStart, gameState}) {
    const [startCount, setStartCount] = useState(false)
    function startGame() {
        setStartCount(true);
        socket.emit("gameStart", {playerID: player._id, gameID: gameState._id});
      }

    return(
        <>
         {isHost && startCount === false ? 
            <button className="resetButton" onClick={startGame}> START </button>
            :
            null
        } 
        </>
       
    )
}
