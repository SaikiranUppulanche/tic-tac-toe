import "./CurrentPlayer.css";

const CurrentPlayer = ({ activePlayer }) => {
  return (
    <div className="current-player">
      <h3>
        Current Player: <span>{activePlayer === 0 ? "X" : "O"}</span>{" "}
      </h3>
    </div>
  );
};

export default CurrentPlayer;
