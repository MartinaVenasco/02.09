import "./index.css";

const Counter = ({ increase, decrease, page }) => {
  return (
    <div className="counter">
      {" "}
      <button className="decrease-btn" onClick={decrease}>
        -
      </button>
      <p>{page}</p>
      <button className="increase-btn" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
