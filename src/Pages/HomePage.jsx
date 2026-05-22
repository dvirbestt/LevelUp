import React from 'react'
import Task from '../Components/task'



export default function HomePage() {
    return (
        <div>
            <Task task={{taskName: "Push ups",
                taskDescription:"Complete 50 Push ups",
                progression:40 ,
                overall:50 ,
                exp:10}} />
                <Task task={{taskName: "Push ups",
                taskDescription:"Complete 50 Push ups",
                progression:30 ,
                overall:50 ,
                exp:10}} />
                <Task task={{taskName: "Push ups",
                taskDescription:"Complete 50 Push ups",
                progression:40 ,
                overall:50 ,
                exp:10}} />
        </div>
    )
}
