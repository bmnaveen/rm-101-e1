import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({countis}) => {
  
  // sample value to be replaced
 let [count,setCount]=useState(countis)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={()=>{
        setCount(count+1)
      }} data-testid="task-counter-increment-button">Increase</button>
      <span data-testid="task-counter-value">{count}</span>
      <button onClick={()=>{
        if(count<=1) return
        setCount(count-1)
      }} data-testid="task-counter-decrement-button">Decrease</button>
    </div>
  );
};

export default Counter;
