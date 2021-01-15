import React, { Component } from 'react'

export default class TodoList extends Component {

    toggleDone = (itemName, isItemDone) => {
        if(isItemDone){
            this.props.resetTodo(itemName)
            
        }else{
            this.props.markTodoAsDone(itemName)
        }
    } 

    renderItems = items => items.map((item, i) => (
        <li key={`${item}--${i}`} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{!item.done ? item.name : <del className="text-muted">{item.name}</del>}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={() => this.toggleDone(item.name, item.done)}
                    className={`btn btn-link edit-item ${item.done ? 'text-warning' : 'text-success'}`} >
                    <i className={`fas fa-${item.done ? 'times' : 'check'}`}></i>
                </button>
            <button onClick={() => this.props.delete(item.name)}
                className="btn btn-link text-danger edit-item">
                <i className="fas fa-trash"></i>
            </button>
            </div>
        </li >
    ))

    render() {
        return (
            <ul className="list-group drop-shadow">
                {this.renderItems(this.props.todos)}
            </ul>
        )
    }
}

