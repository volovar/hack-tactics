import React from "react";
import Task from "components/Task/Task";
import { useTaskState } from "contexts/TaskProvider";
import { useDayState } from "contexts/DayProvider";

const TaskList = () => {
    const { tasks } = useTaskState();
    const { currentDay } = useDayState();

    return tasks[currentDay] ? (
        <ul>
            {tasks[currentDay].map((task, i) => (
                <Task key={`task-${i}`} task={task} />
            ))}
        </ul>
    ) : null;
};

export default TaskList;
