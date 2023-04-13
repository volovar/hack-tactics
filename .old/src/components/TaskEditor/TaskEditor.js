import React, { useState } from "react";
import { useTaskDispatch } from "contexts/TaskContext";
import { useDayState } from "contexts/DayContext";
import { css } from "@emotion/core";

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
            name: "",
            recurring: false,
            complete: false,
            time: null
        }
    );
    const [hasTime, setHasTime] = useState(false);

    const handleAdd = () => {
        dispatch({ type: "CREATE", task: { ...task, day: currentDay } });
        setTask({ name: "", recurring: false, complete: false, time: null });
        setHasTime(false);
    };

    const handleUpdate = () => {
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

    const handleSubmit = e => {
        e.preventDefault();
        editTask ? handleUpdate() : handleAdd();
    };

    return (
        <form css={taskNewStyle} onSubmit={handleSubmit}>
            <input
                css={css`
                    display: block;
                    margin-bottom: 0.7em;
                `}
                placeholder="Task Name"
                onChange={handleNameChange}
                value={task.name}
            />

            <label css={flexLabelStyle}>
                <span css={inputLabelStyle}>Recurring:</span>
                <input
                    onChange={handleRecurringChange}
                    type="checkbox"
                    checked={task.recurring}
                />
            </label>

            <label css={flexLabelStyle}>
                <span css={inputLabelStyle}>Time Limit:</span>
                <input
                    onChange={handleTimeToggle}
                    type="checkbox"
                    checked={hasTime}
                />
            </label>

            {hasTime ? (
                <div
                    css={css`
                        margin-bottom: 0.7em;
                    `}
                >
                    <label
                        css={css`
                            display: flex;
                            flex-basis: 50%;
                        `}
                    >
                        <span>Hours:</span>
                        <input type="number" />
                    </label>

                    <label
                        css={css`
                            display: flex;
                            flex-basis: 50%;
                        `}
                    >
                        <span>Minutes</span>
                        <input type="number" />
                    </label>
                </div>
            ) : null}

            <div>
                {editTask ? (
                    <button type="submit">Update</button>
                ) : (
                    <button type="submit">Add</button>
                )}
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default TaskEditor;
