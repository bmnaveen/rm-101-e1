import React, { useEffect ,useState} from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({rata,setData}) => {
  // sample values to be replaced

const remlength=[...rata].filter((e)=>{
  if(e.done==false){
    return true
  }
})

  let totalTask = rata.length;
  let unCompletedTask = remlength.length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
