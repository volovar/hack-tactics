import React, { createContext, useContext, useReducer } from "react";

const DAYS = {
    0: { abbr: "Sun", name: "Sunday", next: 1 },
    1: { abbr: "Mon", name: "Monday", next: 2 },
    2: { abbr: "Tue", name: "Tuesday", next: 3 },
    3: { abbr: "Wed", name: "Wednesday", next: 4 },
    4: { abbr: "Thu", name: "Thursday", next: 5 },
    5: { abbr: "Fri", name: "Friday", next: 6 },
    6: { abbr: "Sat", name: "Saturday", next: 0 }
};

const createDaysInOrder = (days = DAYS, currentDay) => {
    const startingDay = days[currentDay];
};

const DayStateContext = createContext();
const DayDispatchContext = createContext();

const dayReducer = (state, action) => {
    switch (action.type) {
        case "set": {
            return {
                ...state,
                currentDay: Number(action.dayInt)
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const DayProvider = ({ children }) => {
    const [state, setDay] = useReducer(dayReducer, {
        currentDay: new Date(Date.now()).getDay(),
        daysInOrder: DAYS
    });

    return (
        <DayStateContext.Provider value={state}>
            <DayDispatchContext.Provider value={setDay}>
                {children}
            </DayDispatchContext.Provider>
        </DayStateContext.Provider>
    );
};

const useDayState = () => {
    const context = useContext(DayStateContext);

    if (typeof context === "undefined") {
        throw new Error("useDayState must be used in a DayProvider");
    }

    return context;
};

const useDayDispatch = () => {
    const context = useContext(DayDispatchContext);

    if (typeof context === "undefined") {
        throw new Error("useDayDispatch must be used in a DayProvider");
    }

    return context;
};

export { DayProvider, useDayDispatch, useDayState };
