import React from "react";
import Task from "components/Task/Task";
import { useTaskState } from "contexts/TaskContext";
import { useDayState } from "contexts/DayContext";
import { css } from "emotion";

const TaskList = () => {
    const { tasks } = useTaskState();
    const { currentDay } = useDayState();
    const filteredTasks = tasks.filter(task => task.day === currentDay);

    return filteredTasks ? (
        <ul
            className={css`
                list-style: none;
                padding: 0;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow: auto;
            `}
        >
            {filteredTasks.map((task, i) => (
                <Task key={`task-${i}`} task={task} />
            ))}
        </ul>
    ) : null;
};

export default TaskList;
