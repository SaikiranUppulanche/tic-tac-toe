import { useState } from "react";
import GameBoard from "./GameBoard";
import MessageDisplay from "./MessageDisplay";
import "./TicTacToe.css";
import CurrentPlayer from "./CurrentPlayer";

const Players = {
  X: 0,
  O: 1,
};

const DisplayPlayer = {
  [Players.X]: "X",
  [Players.O]: "O",
};

const DefaultTurns = {
  [Players.X]: [],
  [Players.O]: [],
};

const winningPattterns = [
  "012",
  "345",
  "678",
  "036",
  "147",
  "258",
  "048",
  "246",
];

const TicTacToe = () => {
  const [activePlayer, setActivePlayer] = useState(Players.X);

  const [playerTurn, setPlayerTurn] = useState(structuredClone(DefaultTurns));

  const [message, setMessage] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [moveCount, setMoveCount] = useState(0);

  const handlePlayerTurn = (id) => {
    if (isGameOver) return;
    return () => {
      const newPlayer = activePlayer === Players.X ? Players.O : Players.X;

      const PlayerXTurns = playerTurn[Players.X];
      const PlayerOTurns = playerTurn[Players.O];

      if (
        PlayerXTurns.join("").includes(String(id)) ||
        PlayerOTurns.join("").includes(String(id))
      ) {
        return;
      }

      const updatedTurns = structuredClone(playerTurn);
      updatedTurns[activePlayer].push(String(id));

      const won = isPlayerWon(updatedTurns[activePlayer]);

      if (won) {
        setMessage(`Player ${DisplayPlayer[activePlayer]} has Won the Game.`);
        setIsGameOver(true);
      } else if (moveCount + 1 === 9) {
        setMessage("Game is drawn.");
        setIsGameOver(true);
      }

      setPlayerTurn(updatedTurns);
      setActivePlayer(newPlayer);
      setMoveCount(moveCount + 1);
    };
  };

  function isPlayerWon(turns) {
    const turnsInString = turns.sort().join("");
    const isWon = winningPattterns.some((t) =>
      checkSinglePattern(t, turnsInString)
    );
    return isWon;
  }

  function checkSinglePattern(singlePattern, turnsInString) {
    return singlePattern.split("").every((p) => turnsInString.includes(p));
  }

  function handleRestart() {
    setPlayerTurn(structuredClone(DefaultTurns));
    setActivePlayer(Players.X);
    setMessage("");
    setIsGameOver(false);
    setMoveCount(0);
  }

  return (
    <div className="container">
      <CurrentPlayer activePlayer={activePlayer} />
      <GameBoard
        playerTurn={playerTurn}
        activePlayer={activePlayer}
        handlePlayerTurn={handlePlayerTurn}
      />
      <MessageDisplay message={message} onRestart={handleRestart} />
    </div>
  );
};

export default TicTacToe;
