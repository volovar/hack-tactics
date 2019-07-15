import React, { Component } from "react";
import Day from "components/Day/Day";
import TaskView from "components/TaskView/TaskView";
import { useDayState } from "contexts/DayContext";
import styles from "./day-view.styles";

const DayView = () => {
    const { currentDay, daysInOrder } = useDayState();
    const activeDay = daysInOrder[currentDay];

    return (
        <div css={styles.dayView}>
            <ul css={styles.dayList}>
                {Object.keys(daysInOrder).map(dayIndex => {
                    const day = daysInOrder[dayIndex];

                    return (
                        <Day
                            abbr={day.abbr}
                            dayInt={dayIndex}
                            name={day.name}
                            key={day.abbr}
                            isActive={day.name === activeDay.name}
                        />
                    );
                })}
            </ul>
            {activeDay && (
                <div css={styles.dayDetails}>
                    <h1>{activeDay.name}</h1>
                    <TaskView />
                </div>
            )}
        </div>
    );
};

export default DayView;
