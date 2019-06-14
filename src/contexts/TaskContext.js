import React, { createContext, useContext, useReducer } from "react";

const TaskStateContext = createContext();
const TaskDispatchContext = createContext();

// Temp task data
const tasks = JSON.parse(window.localStorage.getItem("tasks")) || [
    { _id: 0, name: "sunday task #1", day: 0, done: false },
    { _id: 1, name: "sunday task #2", day: 0, done: true },
    { _id: 2, name: "monday task #1", day: 1, done: false },
    { _id: 3, name: "tuesday task #1", day: 2, done: false },
    { _id: 4, name: "tuesday task #2", day: 2, done: false },
    { _id: 5, name: "wednesday task #1", day: 3, done: false },
    { _id: 6, name: "wednesday task #2", day: 3, done: false },
    { _id: 7, name: "wednesday task #3", day: 3, done: false },
    { _id: 8, name: "thursday task #1", day: 4, done: false },
    { _id: 9, name: "thursday task #2", day: 4, done: true },
    { _id: 10, name: "thursday task #3", day: 4, done: true },
    { _id: 11, name: "friday task #1", day: 5, done: false },
    { _id: 12, name: "saturday task #1", day: 6, done: false }
];
let idCount = tasks.length;

const taskReducer = (state, action) => {
    switch (action.type) {
        case "CREATE": {
            const { tasks } = state;
            idCount++;
            tasks.push({ ...action.task, _id: idCount });

            window.localStorage.setItem("tasks", JSON.stringify(tasks));
            return { tasks };
        }
        case "UPDATE": {
            const { tasks } = state;
            let taskIndex = tasks.findIndex(
                task => task._id === action.task._id
            );

            const newTasks = [...tasks];
            newTasks.splice(tasks.indexOf(taskIndex), 1, action.task);

            window.localStorage.setItem("tasks", JSON.stringify(newTasks));
            return { tasks: newTasks };
        }
        case "DELETE": {
            const { tasks } = state;
            const newTasks = tasks.filter(task => task._id !== action.task._id);

            window.localStorage.setItem("tasks", JSON.stringify(newTasks));
            return { tasks: newTasks };
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
