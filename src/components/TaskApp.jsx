import React, { useEffect } from "react";

import styles from "./taskApp.module.css";
import { useState } from "react";
import axios from "axios"
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import TaskHeader from "./TaskHeader/TaskHeader";
const TaskApp = () => {

 const  [rata,setData]=useState([]);

  useEffect(()=>{
    
      axios.get(`http://localhost:8080/tasks`).then((res)=>{
        setData( res.data)
    }).catch((err)=>{
      console.log(err)
    })
    
  },[])
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      
      <TaskHeader rata={rata} setData={setData} />
      <AddTask rata={rata} setData={setData} />
      <Task rata={rata} setData={setData} />

    </div>
  );
};

export default TaskApp;
