import React, { useEffect, useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter.jsx"
import axios from "axios";
const Task = ({x,rata,setData}) => {
  
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>


    
     <input onClick={(e)=>{
       if(e.target.checked){
         let k=[...rata];
k.forEach((v)=>{
if(v.text==x.text){
  v.done=(true)
}
})
setData(k)
       }else{
        let k=[...rata];
        k.forEach((v)=>{
        if(v.text==x.text){
          v.done=(false)
        }
        })
        setData(k)
       }
     }} type="checkbox" checked={x.done} data-testid="task-checkbox" />
      <div style={{textDecoration: x.done ? "line-through" : "none"  }} data-testid="task-text">{x.text}</div>
     <Counter countis={x.count}></Counter>
      <button onClick={()=>{
 let k=[...rata].filter((v)=>{
  if(v.text==x.text){
    return false
  }else{
   return true
  }
  });
 
 setData(k)
      }} data-testid="task-remove-button">Delete</button>
   
 
  
    </li>
  );
};

export default Task;
