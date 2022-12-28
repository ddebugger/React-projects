import React from 'react'
import TaskItem from "./TaskItem"

//style
import styles from "./TaskList.module.css"

export const TaskList = ({tasks, deleteTask, toggleTask, enterEditMode}) => {
  return (
   <ul className='{style.tasks}'>
        {tasks.sort((a,b) => b.id - a.id).map(task =>(
            <TaskItem 
                key={task.id}
                task={task}
                deleteTask = {deleteTask}
                toggleTask = {toggleTask}
                enterEditMode= {enterEditMode}
            />
        ))
        }
   </ul>
  )
}

export default TaskList
