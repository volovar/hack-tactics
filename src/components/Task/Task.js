import React, { useState } from "react";
import TaskEditor from "components/TaskEditor/TaskEditor";
import { useTaskDispatch } from "contexts/TaskContext";
import { css } from "emotion";

const Task = ({ task }) => {
    const dispatch = useTaskDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch({ type: "DELETE", task });
    };

    return (
        <li>
            {isEditing ? (
                <TaskEditor handleCancel={handleCancel} editTask={task} />
            ) : (
                <>
                    <button>{task.done ? "Re-open" : "Complete"}</button>
                    <button onClick={handleClick}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                    <span
                        className={
                            task.done
                                ? css`
                                      text-decoration: line-through;
                                  `
                                : undefined
                        }
                    >
                        {task.name}
                    </span>
                </>
            )}
        </li>
    );
};

export default Task;
