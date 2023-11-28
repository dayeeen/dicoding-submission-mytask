import React from 'react';
import {showFormattedDate} from "../utils/index.js";

function TaskItem({ id, title, body, createdAt, deadline, deletetask, completed, completetask }) {
    const onDeletetaskEventHandler = () => {
        deletetask(id);
    };

    const oncompletetaskEventHandler = () => {
        completetask(id);
    }

    return (
        <li className="task-item">
            <div className="task-item__content">
                <h3 className="task-item__title">{title}</h3>
                <p className="task-item__date">{showFormattedDate(createdAt)}</p>
                <hr />
                <p className="task-item__body">{body}</p>
                <hr />
                <p className="task-item__deadline">Deadline: {showFormattedDate(deadline)}</p>
            </div>
            <div className="task-item__action">
                <button className="task-item__delete-button" onClick={onDeletetaskEventHandler}>Hapus</button>
                <button className="task-item__archive-button" onClick={oncompletetaskEventHandler}>{!completed ? 'Selesai' : 'Pindahkan'}</button>
            </div>
        </li>
    );
}

export default TaskItem;