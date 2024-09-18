import "./Cell.css";

const Cell = ({ icon, onClick, isWinning }) => {
  return (
    <button
      className={`cell ${isWinning ? "winning-cell" : ""}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default Cell;
