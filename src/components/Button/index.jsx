import "./style.css";

function Button({ placeHolderText, onClick, extraStyle }) {
  return (
    <div className="buttonCotainer" style={extraStyle} onClick={onClick}>
      <span className="spanButton">{placeHolderText}</span>
    </div>
  );
}

export default Button;
