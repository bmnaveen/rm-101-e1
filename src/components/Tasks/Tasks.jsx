import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
const Tasks = ({rata,setData}) => {
  // NOTE: do not delete `data-testid` key value pair

  return (
    <>
    {
       (rata.length>=1)==true ? <ul data-testid="tasks" className={styles.tasks}>
      {
rata.map((x)=>{
 console.log(x)
  return <Task x={x} rata={rata} setData={setData}></Task>
})

      }
    </ul> :<div data-testid="tasks-empty" className={styles.empty}>
        Nothing
      </div>
    }
      
      
    </>
  );
};

export default Tasks;
