import React from 'react'
import "../Styles/task.css"

export default function task(props) {

    const task = props.task
    

    return (
        <div className='task-container'>
            <div>{task.taskName}</div>
            <div>{task.taskDescription}</div>
            <div>{task.progression}/{task.overall}</div>

            {task.progression<task.overall ?<div className='add-button'>Add Amount</div>:
             <div className='completed'>Completed</div>}
             
            <div className='bar-exp'>
                <div className='bar'><div className='fill' style={{ width: ((task.progression / task.overall) * 100) + "%" }}></div></div>
                <div className='exp'>+ {task.exp} exp</div>
            </div>
        </div>
    )
}