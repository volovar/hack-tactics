import React from "react";
import DayView from "components/DayView/DayView";
import styles from "./app.styles";
import { TaskProvider } from "contexts/TaskContext";
import { DayProvider } from "contexts/DayContext";

const App = () => (
    <TaskProvider>
        <DayProvider>
            <div css={styles.app}>
                <header css={styles.appHeader}>
                    <h3>Tactics Coder</h3>
                </header>
                <div css={styles.appBody}>
                    <DayView />
                </div>
                <footer css={styles.appFooter}>&copy; volovar.com</footer>
            </div>
        </DayProvider>
    </TaskProvider>
);

export default App;
