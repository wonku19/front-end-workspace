import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const setCount = () => {
    setCounter(counter + 1);
  };
  const minusCount = () => {
    setCounter(counter - 1);
  };

  console.log("always~~");

  useEffect(() => {
    console.log("useEffect~~");
  }, [counter]);

  useEffect(() => {
    console.log("counter change~~");
  }, []);

  return (
    <div>
      <h1>Total clicks: {counter}</h1>
      <Button text="+1" click={setCount} />
      <Button text="-1" click={minusCount} />
      {/*<button onClick={setCount}>+1</button>
        <button onClick={minusCount}>-1</button>*/}
    </div>
  );
};

export default Counter;
