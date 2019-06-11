import React, { Component } from "react";
import Day from "components/Day/Day";
import { css } from "emotion";

const dayView = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const dayList = css`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const dayDetails = css`
    background: #fefefe;
    flex-grow: 1;
    padding: 0 1em;
`;

const days = [
    { abbr: "Mon", name: "Monday" },
    { abbr: "Tue", name: "Tuesday" },
    { abbr: "Wed", name: "Wednesday" },
    { abbr: "Thu", name: "Thursday" },
    { abbr: "Fri", name: "Friday" },
    { abbr: "Sat", name: "Saturday" },
    { abbr: "Sun", name: "Sunday" }
];

class DayView extends Component {
    state = {
        currentDay: "Monday"
    };

    setCurrentDay = newDay => {
        this.setState({ currentDay: newDay });
    };

    render() {
        return (
            <div className={dayView}>
                <ul className={dayList}>
                    {days.map(day => (
                        <Day
                            abbr={day.abbr}
                            setCurrentDay={this.setCurrentDay}
                            name={day.name}
                            key={day.abbr}
                            isActive={day.name === this.state.currentDay}
                        />
                    ))}
                </ul>
                {this.state.currentDay && (
                    <div className={dayDetails}>
                        <h1>{this.state.currentDay}</h1>
                        <div>
                            Time Breakdown
                            <div>-------</div>
                        </div>
                        <div>
                            <h4>Tasks</h4>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default DayView;
