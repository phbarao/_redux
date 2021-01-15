import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default class TodoContainer extends Component {

    state = {
        todos: []
    }

    add = todo => {
        if (!this.state.todos.map(t => t.name).includes(todo))
            this.setState({ todos: [...this.state.todos, { name: todo, done: false }] })
    }

    delete = todoName => this.setState({
        todos: [...this.state.todos.filter(todo => todo.name !== todoName)]
    })

    changeTodoDoneState = (todoName, done) => {
        let todos = this.state.todos.map(t => {
            if (t.name === todoName) t.done = !done
            return t
        })
        this.setState({ todos })
    }

    markTodoAsDone = todoName => {
        this.changeTodoDoneState(todoName, false)
    }

    resetTodo = todoName => {
        this.changeTodoDoneState(todoName, true)
    }

    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-8 offset-2">
                        <TodoInput add={this.add} />
                        <TodoList
                            todos={this.state.todos}
                            delete={this.delete}
                            markTodoAsDone={this.markTodoAsDone}
                            resetTodo={this.resetTodo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
