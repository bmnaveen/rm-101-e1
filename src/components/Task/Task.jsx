import React, { useEffect, useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter.jsx"
import axios from "axios";
const Task = ({rata,setData}) => {
  
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>

{
  rata.map((e)=>{
    return <>
     <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{e.text}</div>
     <Counter rata={rata} setData={setData}></Counter>
      <button data-testid="task-remove-button"></button>
    </>
  })
}  
    </li>
  );
};

export default Task;
