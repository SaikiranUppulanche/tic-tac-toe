import Cell from "./Cell";
import "./GameBoard.css";

const GameBoard = ({
  playerTurn,
  activePlayer,
  handlePlayerTurn,
  winningCombo,
}) => {
  const buttons = Array.from(new Array(9));

  return (
    <div className="board">
      {buttons.map((_, id) => {
        const otherPlayer = activePlayer === 0 ? 1 : 0;
        const currentPlayerTurns = playerTurn[activePlayer];
        const otherPlayerTurns = playerTurn[otherPlayer];

        let icon = "";
        if (currentPlayerTurns.includes(String(id))) {
          icon = activePlayer === 0 ? "X" : "O";
        } else if (otherPlayerTurns.includes(String(id))) {
          icon = activePlayer === 1 ? "X" : "O";
        }

        const isWinningCell =
          winningCombo && winningCombo.includes(id.toString());

        return (
          <Cell
            key={id}
            icon={icon}
            onClick={handlePlayerTurn(id)}
            isWinning={isWinningCell}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
