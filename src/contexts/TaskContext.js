import React, { createContext, useContext, useReducer } from "react";

const { localStorage } = window;
const TaskStateContext = createContext();
const TaskDispatchContext = createContext();

const generateId = currentIds => {
    const { crypto } = window;
    const { floor, random } = Math;
    const newId = crypto
        ? crypto.getRandomValues(new Uint16Array(1))[0]
        : floor(random() * floor(65535));

    return currentIds.includes(newId) ? generateId(currentIds) : newId;
};

const initialTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
const initialIds = JSON.parse(localStorage.getItem("ids")) || [];
let ids = [...initialIds];

const taskReducer = (state, action) => {
    switch (action.type) {
        case "CREATE": {
            const { tasks } = state;
            const id = generateId(ids);
            tasks.push({ ...action.task, _id: id });
            ids.push(id);

            localStorage.setItem("tasks", JSON.stringify(tasks));
            localStorage.setItem("ids", JSON.stringify(ids));
            return { tasks };
        }
        case "UPDATE": {
            const { tasks } = state;
            let taskIndex = tasks.findIndex(
                task => task._id === action.task._id
            );
            const newTasks = [...tasks];

            newTasks[taskIndex] = { ...newTasks[taskIndex], ...action.task };

            localStorage.setItem("tasks", JSON.stringify(newTasks));
            return { tasks: newTasks };
        }
        case "DELETE": {
            const { tasks } = state;
            let taskIndex = tasks.findIndex(
                task => task._id === action.task._id
            );
            const newTasks = [...tasks];
            let idIndex = ids.findIndex(id => id === action.task._id);

            newTasks.splice(taskIndex, 1);
            ids.splice(idIndex, 1);

            localStorage.setItem("tasks", JSON.stringify(newTasks));
            localStorage.setItem("ids", JSON.stringify(ids));
            return { tasks: newTasks };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const TaskProvider = ({ children }) => {
    const [state, setTasks] = useReducer(taskReducer, { tasks: initialTasks });

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
