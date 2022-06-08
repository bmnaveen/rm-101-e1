import React, { useEffect ,useState} from "react";
import styles from "./taskHeader.module.css";
import axios from "axios";
const TaskHeader = () => {
  // sample values to be replaced

const [get,setget]=useState()
const [rem,setrem]=useState()

  let totalTask = get;
  let unCompletedTask = rem;
useEffect(()=>{
  getData();
  getDatar();
},[])

const getData=()=>{
  axios.get(`http://localhost:8080/tasks`).then((res)=>{
    setget( res.data.length)
}).catch((err)=>{
  console.log(err)
})
}

const getDatar=()=>{
  axios.get(`http://localhost:8080/tasks?done=false`).then((res)=>{
    setrem( res.data.length)

}).catch((err)=>{
  console.log(err)
})
}
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
