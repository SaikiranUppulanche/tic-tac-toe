import "./MessageDisplay.css";

const MessageDisplay = ({ message, onRestart }) => {
  return (
    <>
      {message && (
        <div>
          <h4 className="font">{message}</h4>
          <button className="restart" onClick={onRestart}>
            Restart
          </button>
        </div>
      )}
    </>
  );
};

export default MessageDisplay;
