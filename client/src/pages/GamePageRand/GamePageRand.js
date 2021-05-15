import React, { useEffect, useState } from 'react';
import './GamePageRand.css';
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove } from "chess.js";
import Video from '../../components/Video/Video';
import patrunus from '../../videos/patronus.mp4';
import Score from '../../components/Score/Score';
const Chess = require("chess.js");

export default function GamePage() {
  const str = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  let initializer = new Chess(str);

  const [chess ,setChess] = useState(initializer);
  const [fen, setFen] = useState(chess.fen());
  
  const handleMove = (move: ShortMove) => {
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          setFen(chess.fen());
        }
      }, 300);

      setFen(chess.fen());
    }
    
  };

  return (
    <div className="flex-center">
      <Video src={patrunus}/>
      <div className="left-side">
        <Score/>
      </div>
      <div className="mid-side">
        <h1 className="game-title">
          Random Chess AI
        </h1>
        <div className="turn-order">
        Turn Order
      </div>
        <div className="ripple-small">  
          <Chessboard width={600} position={fen} onDrop={(move) =>
                handleMove({
                  from: move.sourceSquare,
                  to: move.targetSquare,
                  promotion: "q",
                })
              }/>
        </div>
      </div>
      <div className="right-side">
        <Score/>
      </div>
      
     
      
    </div>
  );
}
