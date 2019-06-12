import React, { Component } from "react";
import DayView from "components/DayView/DayView";
import styles from "./app.styles";
import TaskContext, { tasks } from "contexts/TaskContext";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTask: this.addTask,
            currentDay: new Date(Date.now()).getDay(),
            setCurrentDay: this.setCurrentDay,
            tasks
        };
    }

    addTask = task => {
        let newTasks = [...this.state.tasks];
        newTasks[this.state.currentDay].push(task);
        this.setState({ tasks: newTasks });
    };

    setCurrentDay = newDay => {
        this.setState({ currentDay: newDay });
    };

    render() {
        return (
            <TaskContext.Provider value={this.state}>
                <div className={styles.app}>
                    <header className={styles.appHeader}>
                        <h3>Tactics Coder</h3>
                    </header>
                    <div className={styles.appBody}>
                        <DayView />
                    </div>
                    <footer className={styles.appFooter}>
                        &copy; volovar.com
                    </footer>
                </div>
            </TaskContext.Provider>
        );
    }
}

export default App;
