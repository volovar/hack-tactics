import React, { useState } from "react";
import { useTaskDispatch } from "contexts/TaskContext";
import { useDayState } from "contexts/DayContext";
import { css } from "emotion";

const taskNewStyle = css`
    display: flex;
    flex-direction: column;
    input,
    button {
        font-size: 1em;
    }
`;

const flexLabelStyle = css`
    align-items: flex-end;
    display: flex;
    margin-bottom: 0.7em;

    span {
        flex-basis: 5.4em;
    }

    input {
        flex-grow: 1;
    }
`;

const inputLabelStyle = css`
    display: block;
`;

const TaskEditor = ({ handleCancel, editTask = null }) => {
    const dispatch = useTaskDispatch();
    const { currentDay } = useDayState();
    const [task, setTask] = useState(
        editTask || {
            name: "New Task",
            recurring: false,
            complete: false,
            time: null
        }
    );
    const [hasTime, setHasTime] = useState(false);

    const handleAddClick = () => {
        dispatch({ type: "CREATE", task: { ...task, day: currentDay } });
    };

    const handleUpdateClick = () => {
        dispatch({ type: "UPDATE", task: { ...task } });
    };

    const handleNameChange = e => {
        setTask({ ...task, name: e.target.value });
    };

    const handleRecurringChange = e => {
        setTask({ ...task, recurring: e.target.checked });
    };

    const handleTimeToggle = e => {
        setHasTime(e.target.checked);
    };

    return (
        <div className={taskNewStyle}>
            <input
                className={css`
                    display: block;
                    margin-bottom: 0.7em;
                `}
                onChange={handleNameChange}
                value={task.name}
            />

            <label className={flexLabelStyle}>
                <span className={inputLabelStyle}>Recurring:</span>
                <input onChange={handleRecurringChange} type="checkbox" />
            </label>

            <label className={flexLabelStyle}>
                <span className={inputLabelStyle}>Time Limit:</span>
                <input onChange={handleTimeToggle} type="checkbox" />
            </label>

            {hasTime && (
                <div
                    className={css`
                        margin-bottom: 0.7em;
                    `}
                >
                    <label
                        className={css`
                            display: flex;
                            flex-basis: 50%;
                        `}
                    >
                        <span>Hours:</span>
                        <input type="number" />
                    </label>

                    <label
                        className={css`
                            display: flex;
                            flex-basis: 50%;
                        `}
                    >
                        <span>Minutes</span>
                        <input type="number" />
                    </label>
                </div>
            )}

            <div>
                {editTask ? (
                    <button onClick={handleUpdateClick}>Update</button>
                ) : (
                    <button onClick={handleAddClick}>Add</button>
                )}
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default TaskEditor;
