import React from "react";
import { css } from "emotion";
import TaskContext from "contexts/TaskContext";

const Day = ({ abbr, dayInt, isActive, name }) => (
    <TaskContext.Consumer>
        {({ setCurrentDay }) => {
            const handleClick = () => {
                setCurrentDay(dayInt);
            };

            return (
                <li
                    className={css`
                        flex-grow: 1;
                    `}
                >
                    <button
                        className={css`
                            background: ${isActive ? "#fefefe" : "transparent"};
                            border: 0;
                            cursor: pointer;
                            font-size: 1em;
                            outline: none;
                            padding: 0.8em 0;
                            width: 100%;
                            -webkit-appearance: none;
                        `}
                        type="button"
                        onClick={handleClick}
                    >
                        {abbr}
                    </button>
                </li>
            );
        }}
    </TaskContext.Consumer>
);

export default Day;
