import React from "react";

import styles from "./taskApp.module.css";


import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import TaskHeader from "./TaskHeader/TaskHeader";
const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      
      <TaskHeader />
      <AddTask />
      <Task />

    </div>
  );
};

export default TaskApp;
