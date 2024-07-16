import {useState} from 'react';
import React from 'react';
import {TodoModel} from "./classes/TodoModel";
import {NewTodoForm} from "./components/NewTodoForm";
import {TodoTable} from "./components/TodoTable";

export const App = () => {

    const [todos, setTodos] = useState<TodoModel[]>([
        new TodoModel(1, 'Learn React', 'Me'),
        new TodoModel(2, 'Learn TypeScript', 'Me'),
        new TodoModel(3, 'Learn TailwindCSS', 'Me'),
    ])
    const [showAddTodoForm, setShowAddTodoForm] = useState(false)

    const addTodo = (description: string, assigned: string) => {
        let rowNumber = 0
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].id + 1
        } else {
            rowNumber = 1
        }
        const newTodo = new TodoModel(rowNumber, description, assigned)
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (deleteTodoRowNumber: number) => {
        let filtered = todos.filter(function (value) {
            return value.id !== deleteTodoRowNumber;
        })
        setTodos(filtered);
    }

    return (
        <div className="min-h-screen bg-zinc-800 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="text-xl font-semibold mb-4">
                    To-do List
                </div>
                <div className="space-x-2">
                    <TodoTable todos={todos} deleteTodo={deleteTodo}/>
                    <button className={"bg-zinc-500 text-white px-4 py-2 rounded-lg mt-4 ml-4"}
                            onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
                        {showAddTodoForm ? 'Hide' : 'Add New Todo'}
                    </button>
                    <button className="bg-zinc-500 text-white px-4 py-2 rounded-lg mt-4" onClick={() => setTodos([])}>
                        Clear List
                    </button>
                    {showAddTodoForm &&
                        <NewTodoForm addTodo={addTodo}/>
                    }
                </div>
            </div>
        </div>
    );
}