import Counter from "./Count";
import React, { useState } from "react";

const CounterAmount = () => {
  const [addCounter, setAddCounter] = useState([]);
  const [operAmount, setOperAmount] = useState(0);
  const [inputValue, setInputValue] = useState();
  const addCount = () => {
    setAddCounter(addCounter.concat({ Myelem: Counter, unicKey: operAmount }));
    setOperAmount((prev) => prev + 1);
  };

  const deleteCounter = (event) => {
    let result = [...addCounter];
    result = result.filter((el, index) => {
      if (Number(inputValue) === el.unicKey && inputValue !== "") {
        return false;
      }
      return true;
    });
    setAddCounter(result);
    setOperAmount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={addCount}>Add a counter</button>
      <button onClick={deleteCounter}>Delete</button>
      <h3>Counters: {addCounter.length}</h3>
      <input type="text" onChange={(e) => setInputValue(e.target.value)}></input>
      {addCounter.map((elem) => {
        const { Myelem, unicKey } = elem;
        return (
          <React.Fragment key={unicKey}>
            <p>Уникальный ключ:{unicKey}</p> <Myelem />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default CounterAmount;
