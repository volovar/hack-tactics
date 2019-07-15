import React from "react";
import { css } from "@emotion/core";
import { useDayDispatch } from "contexts/DayContext";

const Day = ({ abbr, dayInt, isActive, name }) => {
    const dispatch = useDayDispatch();

    const handleClick = () => {
        dispatch({ type: "set", dayInt });
    };

    return (
        <li
            css={css`
                flex-grow: 1;
            `}
        >
            <button
                css={css`
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
};

export default Day;
