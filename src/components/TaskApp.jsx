import React, { useEffect } from "react";

import styles from "./taskApp.module.css";
import { useState } from "react";
import axios from "axios"
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";
import tasks from "../data/tasks.json"
const TaskApp = () => {

 const  [rata,setData]=useState(tasks);

console.log(rata)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      
      <TaskHeader rata={rata} setData={setData} />
      <AddTask rata={rata} setData={setData} />
      <Tasks rata={rata} setData={setData} />

    </div>
  );
};

export default TaskApp;
