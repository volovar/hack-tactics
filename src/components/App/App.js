import React from "react";
import DayView from "components/DayView/DayView";
import styles from "./app.styles";

const App = () => (
    <div className={styles.app}>
        <header className={styles.appHeader}>
            <h3>Tactics Coder</h3>
        </header>
        <div className={styles.appBody}>
            <DayView />
        </div>
        <footer className={styles.appFooter}>&copy; volovar.com</footer>
    </div>
);

export default App;
