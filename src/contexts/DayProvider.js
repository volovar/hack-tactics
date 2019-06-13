import React, { createContext, useContext, useReducer } from "react";

const DayStateContext = createContext();
const DayDispatchContext = createContext();

const dayReducer = (state, action) => {
    switch (action.type) {
        case "set": {
            return { currentDay: action.day };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const DayProvider = ({ children }) => {
    const [state, setDay] = useReducer(dayReducer, {
        currentDay: new Date(Date.now()).getDay()
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
