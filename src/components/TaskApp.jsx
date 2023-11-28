import React from 'react';
import TaskHeader from './TaskHeader.jsx';
import TaskBody from './TaskBody.jsx';
import TaskFooter from './TaskFooter.jsx';

import { getInitialData } from '../utils/index.js';

class TaskApp extends React.Component {
    #tasks = getInitialData();

    constructor(props) {
        super(props);

        this.state = {
            tasks: this.#tasks,
        };

        this.addTask = this.addTask.bind(this);
        this.deletetask = this.deletetask.bind(this);
        this.searchtask = this.searchtask.bind(this);
        this.completetask = this.completetask.bind(this);
        this.syncTasksState = this.syncTasksState.bind(this);
    }

    addTask({ title, body }) {
        const dateNow = new Date();

        const id = +dateNow;
        const createdAt = dateNow.toISOString();
        const deadline = new Date(dateNow.setDate(dateNow.getDate() + 7)).toISOString();
        const newtask = { id, title, body, createdAt, deadline, completed: false };

        this.#tasks.push(newtask);

        this.syncTasksState();
    }

    deletetask(id) {
        const index = this.#tasks.findIndex((task) => task.id === id);

        if (index === -1) {
            console.error('Tugas tidak ditemukan');
            return;
        }

        this.#tasks.splice(index, 1);

        this.syncTasksState();
    }

    completetask(id) {
        const index = this.#tasks.findIndex((task) => task.id === id);

        if (index === -1) {
            console.error('Tugas tidak ditemukan');
            return;
        }

        this.#tasks[index].completed = !this.#tasks[index].completed;

        this.syncTasksState();
    }

    searchtask(event) {
        const keyword = event.target.value;

        if (keyword) {
            this.setState(() => {
                return {
                    tasks: this.#tasks.filter((task) => {
                        const pattern = new RegExp(keyword, 'i');

                        if (pattern.test(task.title)) {
                            return task;
                        }

                        return null;
                    }),
                };
            });
        } else {
            this.syncTasksState();
        }
    }

    syncTasksState() {
        this.setState(() => {
            return {
                tasks: [...this.#tasks],
            };
        });
    }

    render() {
        return (
            <>
                <TaskHeader searchtask={this.searchtask} />
                <TaskBody
                    addTask={this.addTask}
                    deletetask={this.deletetask}
                    completetask={this.completetask}
                    tasks={this.state.tasks}
                />
                <TaskFooter />
            </>
        );
    }
}

export default TaskApp;
