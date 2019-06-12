import React from "react";
import Task from "components/Task/Task";
import TaskContext from "contexts/TaskContext";

const TaskList = () => (
    <TaskContext.Consumer>
        {({ currentDay, tasks }) =>
            tasks[currentDay] ? (
                <ul>
                    {tasks[currentDay].map((task, i) => (
                        <Task key={`task-${i}`} task={task} />
                    ))}
                </ul>
            ) : null
        }
    </TaskContext.Consumer>
);

export default TaskList;
