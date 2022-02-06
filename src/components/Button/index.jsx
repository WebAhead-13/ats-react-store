import "./style.css";

function Button({ plaseHolderText, onClick, extraStyle }) {
  return (
    <div className="buttonCotainer" style={extraStyle} onClick={onClick}>
      <span className="spanButton">{plaseHolderText}</span>
    </div>
  );
}

export default Button;
