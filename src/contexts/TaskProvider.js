import React, { createContext, useContext, useReducer } from "react";

const TaskStateContext = createContext();
const TaskDispatchContext = createContext();

const tasks = [
    [{ name: "sunday task #1" }, { name: "sunday task #2" }],
    [{ name: "monday task #1" }],
    [{ name: "tuesday task #1" }, { name: "tuesday task #2" }],
    [
        { name: "wednesday task #1" },
        { name: "wednesday task #2" },
        { name: "wednesday task #3" }
    ],
    [{ name: "thursday task #1" }],
    [{ name: "friday task #1" }],
    [{ name: "saturday task #1" }]
];

// const addTask = task => {
//     let newTasks = [...this.state.tasks];
//     newTasks[this.state.currentDay].push(task);
//     this.setState({ tasks: newTasks });
// };

const taskReducer = (state, action) => {
    switch (action.type) {
        case "add": {
            const newTasks = [...state.tasks];
            newTasks[action.task.day].push(action.task);

            return { tasks: newTasks };
        }
        case "remove": {
            return "";
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const TaskProvider = ({ children }) => {
    const [state, setTasks] = useReducer(taskReducer, { tasks });

    return (
        <TaskStateContext.Provider value={state}>
            <TaskDispatchContext.Provider value={setTasks}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskStateContext.Provider>
    );
};

const useTaskState = () => {
    const context = useContext(TaskStateContext);

    if (typeof context === "undefined") {
        throw new Error("useTaskState must be used with a TaskProvider");
    }

    return context;
};

const useTaskDispatch = () => {
    const context = useContext(TaskDispatchContext);

    if (typeof context === "undefined") {
        throw new Error("useTaskDispatch must be used with a TaskProvider");
    }

    return context;
};

export { TaskProvider, useTaskDispatch, useTaskState };
