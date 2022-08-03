import { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const onReset = () => {
    setSecond(0);
    setIsActive(false);
  };
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000);
    } else if (!isActive && second !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [second, isActive]);

  return (
    <>
      <h1>{second}s</h1>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
};

export default Timer;
