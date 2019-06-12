import { createContext } from "react";

export const tasks = [
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

const TaskContext = createContext();

export default TaskContext;
