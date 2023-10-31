import React, { Component} from "react";

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: [],
            name : ''
        };
    }

    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    addTodo = () => {
        const {todo, name} = this.state;

        this.setState ({
            todo: [...todo, name]
        });
    }

    removeTodo = (index) => {
        const {todo, name} = this.state;
        this.setState ({
            todo: [...todo.slice(0, index), ...todo.slice(index + 1)]
        });
    }

    render() {
        const { todo } = this.state;
        return (<div>
            <input type="text" onInput={this.onInput} />
            <button onClick={this.addTodo}>登録</button>
            <ul>
                {todo.map((todo, index) => <li key={index}>
                    {todo}
                    <button onClick={() => this.removeTodo(index)}>削除</button>
                </li>) }
            </ul>
        </div>)
    }
}