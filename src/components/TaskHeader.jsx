import React from "react";

function TaskHeader({ searchtask }) {
    return (
        <header className="task-app__header">
            <h1>Tugasku</h1>
            <input type="search" id="search" name="search" placeholder="Cari Tugas" onChange={searchtask} />
        </header>
    )
}

export default TaskHeader;