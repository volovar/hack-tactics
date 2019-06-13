import React from "react";
import DayView from "components/DayView/DayView";
import styles from "./app.styles";
import { TaskProvider } from "contexts/TaskProvider";
import { DayProvider } from "contexts/DayProvider";

const App = () => (
    <TaskProvider>
        <DayProvider>
            <div className={styles.app}>
                <header className={styles.appHeader}>
                    <h3>Tactics Coder</h3>
                </header>
                <div className={styles.appBody}>
                    <DayView />
                </div>
                <footer className={styles.appFooter}>&copy; volovar.com</footer>
            </div>
        </DayProvider>
    </TaskProvider>
);

export default App;
