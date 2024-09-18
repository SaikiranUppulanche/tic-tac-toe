import "./Cell.css";

const Cell = ({ icon, onClick }) => {
  return (
    <button className="cell" onClick={onClick}>
      {icon}
    </button>
  );
};

export default Cell;
