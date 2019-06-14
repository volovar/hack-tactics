import React, { useState } from "react";
import TaskList from "components/TaskList/TaskList";
import TaskEditor from "components/TaskEditor/TaskEditor";
import { css } from "emotion";

const buttonStyle = css`
    background: lightblue;
    box-sizing: border-box;
    font-size: 1em;
    max-height: 2em;
    max-width: 2em;
    outline: none;
    padding: 0.5em;

    &:active {
        background: blue;
    }
`;

const taskHeaderStyle = css`
    display: flex;
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
        <div>
            <div className={taskHeaderStyle}>
                <h3>Tasks</h3>
                <button onClick={handleClick} className={buttonStyle}>
                    +
                </button>
            </div>
            <TaskList />
            {addNew && <TaskEditor handleCancel={cancelAddNew} />}
        </div>
    );
};

export default TaskView;
