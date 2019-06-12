import React, { Component } from "react";
import Day from "components/Day/Day";
import TaskView from "components/TaskView/TaskView";
import TaskContext from "contexts/TaskContext";
import styles from "./day-view.styles";

const days = [
    { abbr: "Sun", name: "Sunday" },
    { abbr: "Mon", name: "Monday" },
    { abbr: "Tue", name: "Tuesday" },
    { abbr: "Wed", name: "Wednesday" },
    { abbr: "Thu", name: "Thursday" },
    { abbr: "Fri", name: "Friday" },
    { abbr: "Sat", name: "Saturday" }
];

const DayView = () => (
    <TaskContext.Consumer>
        {({ currentDay }) => {
            const activeDay = days[currentDay];

            return (
                <div className={styles.dayView}>
                    <ul className={styles.dayList}>
                        {days.map((day, i) => (
                            <Day
                                abbr={day.abbr}
                                dayInt={i}
                                name={day.name}
                                key={day.abbr}
                                isActive={day.name === activeDay.name}
                            />
                        ))}
                    </ul>
                    {activeDay && (
                        <div className={styles.dayDetails}>
                            <h1>{activeDay.name}</h1>
                            <div>
                                Time Breakdown
                                <div>-------</div>
                            </div>
                            <TaskView />
                        </div>
                    )}
                </div>
            );
        }}
    </TaskContext.Consumer>
);

export default DayView;
