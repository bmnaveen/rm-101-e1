import React, { useState } from "react";
import styles from "./addTask.module.css";
import axios from "axios"

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [inter,setInt]=useState("")

const getInput=(e)=>{
const {Id,value}=e.target;
setInt(value)

}

const sendData=()=>{
if(inter.length<=0){
  return ;
}
axios.get("http://localhost:8080/").then((res)=>{
console.log(res.data)
}).catch((err)=>{
  console.log(err)
})

}

  return (
    <div className={styles.todoForm}>
      <input onChange={getInput} data-testid="add-task-input" type="text" />
      <button onClick={sendData} data-testid="add-task-button">Button</button>
    </div>
  );
};

export default AddTask;
