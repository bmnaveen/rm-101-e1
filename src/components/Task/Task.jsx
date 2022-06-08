import React, { useEffect, useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter.jsx"
import axios from "axios";
const Task = () => {
  const [mdatas,setmdatas]=useState([]);

useEffect(()=>{
  getData();
  
},[])

const getData=()=>{
  axios.get(`http://localhost:8080/tasks`).then((res)=>{
    setmdatas( res.data)
}).catch((err)=>{
  console.log(err)
})
}
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>

{
  mdatas.map((e)=>{
    return <>
     <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{e.text}</div>
     <Counter></Counter>
      <button data-testid="task-remove-button"></button>
    </>
  })
}  
    </li>
  );
};

export default Task;
