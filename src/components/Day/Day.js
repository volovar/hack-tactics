import React from "react";
import { css } from "emotion";

const Day = ({ abbr, setCurrentDay, isActive, name }) => {
    const handleClick = () => {
        setCurrentDay(name);
    };

    return (
        <li>
            <button
                className={css`
                    background: ${isActive ? "#fefefe" : "transparent"};
                    border: 0;
                    outline: none;
                    -webkit-appearance: none;
                `}
                type="button"
                onClick={handleClick}
            >
                {isActive ? name : abbr}
            </button>
        </li>
    );
};

export default Day;
