import React, { useState } from "react";
import TaskList from "components/TaskList/TaskList";
import TaskEditor from "components/TaskEditor/TaskEditor";
import { css } from "emotion";

const headerStyle = css`
    margin: 0;
`;

const buttonStyle = css`
    background: #666;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    outline: none;
    padding: 0.5em;
    transition: background 150ms linear;

    &:active {
        background: #333;
    }

    &:disabled {
        background: #999;
        color: #ccc;
        cursor: not-allowed;
    }
`;

const taskHeaderStyle = css`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const TaskView = () => {
    const [addNew, setAddNew] = useState(false);

    const handleClick = () => {
        setAddNew(true);
    };

    const cancelAddNew = () => {
        setAddNew(false);
    };

    return (
        <div
            className={css`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                height: 100%;
                overflow: auto;
            `}
        >
            <div className={taskHeaderStyle}>
                <h3 className={headerStyle}>Tasks</h3>
                <button
                    onClick={handleClick}
                    className={buttonStyle}
                    disabled={addNew}
                >
                    Add +
                </button>
            </div>
            <TaskList />
            {addNew && <TaskEditor handleCancel={cancelAddNew} />}
        </div>
    );
};

export default TaskView;
