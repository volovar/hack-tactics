import React from "react";
import TaskList from "components/TaskList/TaskList";
import { css } from "emotion";
import TaskContext from "contexts/TaskContext";

const TaskView = () => (
    <TaskContext.Consumer>
        {({ addTask }) => (
            <div>
                <div
                    className={css`
                        display: flex;
                    `}
                >
                    <h3>Tasks</h3>
                    <button
                        className={css`
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
                        `}
                    >
                        +
                    </button>
                </div>
                <TaskList />
            </div>
        )}
    </TaskContext.Consumer>
);

export default TaskView;
