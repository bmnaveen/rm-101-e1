import React, { useState } from "react";
import styles from "./addTask.module.css";
import axios from "axios"
import { nanoid } from 'nanoid'
const AddTask = ({rata,setData}) => {
  // NOTE: do not delete `data-testid` key value pair

  const [inter,setInt]=useState("")

const getInput=(e)=>{
const {Id,value}=e.target;
setInt(value)

}

const sendData=()=>{
if(inter.length<=0){
  alert("Empty fields")
  return;
}else{
  let c=0;
  rata.forEach((x)=>{
  
    if(x.text==inter){
      
     c++ ;
    } 
  })
  if(c>=1){
    alert("Already exit")
  } return
}

let ko=[...rata]
ko.push({
  id: nanoid(),
  text: inter,
  done: false,
  count: 1
})
setData(ko)
  
}

  return (
    <div className={styles.todoForm}>
      <input onChange={getInput} data-testid="add-task-input" type="text" />
      <button onClick={sendData} data-testid="add-task-button">Add</button>
    </div>
  );
};

export default AddTask;
