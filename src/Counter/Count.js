import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="count">
      <button onClick={decrement} className="buttonPlus">
        Decrement
      </button>
      <h1> Count: {counter} </h1>
      <button onClick={increment} className="buttonPlus">
        Increment
      </button>
    </div>
  );
};

export default Counter;
