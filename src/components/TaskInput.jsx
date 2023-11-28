import React from 'react';

class TaskInput extends React.Component {

    #initialState = {
        title: '',
        body: '',
        deadline: '',
    }

    #TITLE_INPUT_MAX_LENGTH = 50;

    constructor(props) {
        super(props);

        this.state = this.#initialState;

        this.onTitleInputChangeEventHandler = this.onTitleInputChangeEventHandler.bind(this);
        this.onDeadlineInputChangeEventHandler = this.onDeadlineInputChangeEventHandler.bind(this);
        this.onBodyInputChangeEventHandler = this.onBodyInputChangeEventHandler.bind(this);
        this.onFormSubmitEventHandler = this.onFormSubmitEventHandler.bind(this);

        this.resetForm = this.resetForm.bind(this);
        this.remainingChars = this.remainingChars.bind(this);
    }

    onTitleInputChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onDeadlineInputChangeEventHandler(event) {
        this.setState(() => {
            return {
                deadline: event.target.value,
            };
        });
    }

    onBodyInputChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onFormSubmitEventHandler(event) {
        event.preventDefault();

        const formInputData = {
            title: event.target.title.value, 
            body: event.target.body.value, 
            deadline: event.target.deadline.value,
        }

        this.props.addTask(formInputData);
        this.resetForm();
    }

    resetForm() {
        this.setState(() => {
            return this.#initialState;
        });
    }
    
    remainingChars() {
        return this.#TITLE_INPUT_MAX_LENGTH - this.state.title.length;
    }

    render() {
        return (<div className="task-input">
                <form onSubmit={this.onFormSubmitEventHandler}>
                    <div>
                        <p className="task-input__title__char-limit">Sisa karakter: {this.remainingChars()}</p>
                        <p>Mata kuliah: </p>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={this.state.title}
                            placeholder="Tulis nama mata kuliahnya di sini!"
                            className="task-input__title"
                            maxLength={this.#TITLE_INPUT_MAX_LENGTH}
                            onChange={this.onTitleInputChangeEventHandler}
                        />
                        <p>Deadline: </p>
                        <input  
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={this.state.deadline}
                            className="task-input__date"
                            onChange={this.onDeadlineInputChangeEventHandler}
                        />
                    </div>
                    <div>
                        <p>Rincian tugas:</p>
                        <textarea
                            id="body"
                            name="body"
                            placeholder="Isi rincian tugasnya di sini..."
                            value={this.state.body}
                            rows="10"
                            onChange={this.onBodyInputChangeEventHandler}
                        ></textarea>
                    </div>
                    <button type="submit">Simpan</button>
                </form>
            </div>);
    }
}

export default TaskInput;
