import React from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ header, tasks, deletetask, completetask }) {
    return (
        <div>
            <h2>{ header }</h2>
            {tasks.length
                ? <ul className="tasks-list">
                    {tasks.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                {...task}
                                deletetask={deletetask}
                                completetask={completetask}
                            />
                        );
                    })}
                </ul>
                : <p className="tasks-list__empty-message">Belum ada tugas yang selesai</p>}
        </div>
    );
}

export default TaskList;
