import React from "react";
import TaskInput from "./TaskInput.jsx";
import TaskList from "./TaskList.jsx";

function TaskBody({ addTask, deletetask, completetask, tasks }) {
    return (
        <main className="task-app__body">
            <TaskInput addTask={addTask} />
            <TaskList
                header="Daftar Tugas:"
                tasks={tasks.filter((task) => !task.completed)}
                deletetask={deletetask}
                completetask={completetask}
            />
            <TaskList
                header="Selesai"
                tasks={tasks.filter((task) => task.completed)}
                deletetask={deletetask}
                completetask={completetask}
            />
        </main>
    );
}

export default TaskBody;
