import React, { useState } from "react";
import TaskList from "components/TaskList/TaskList";
import TaskEditor from "components/TaskEditor/TaskEditor";
import { css } from "@emotion/core";

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
            css={css`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                height: 100%;
                overflow: auto;
            `}
        >
            <div css={taskHeaderStyle}>
                <h3 css={headerStyle}>Tasks</h3>
                <button
                    onClick={handleClick}
                    css={buttonStyle}
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
