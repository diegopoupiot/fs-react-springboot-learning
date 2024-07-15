import {useState} from 'react';
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {

    const [todos, setTodos] = useState([
        {rowNumber: 1, rowDesc: 'Feed puppy', rowAssigned: 'User One'},
        {rowNumber: 2, rowDesc: 'Water plants', rowAssigned: 'User Two'},
        {rowNumber: 3, rowDesc: 'Make dinner', rowAssigned: 'User One'},
        {rowNumber: 4, rowDesc: 'Do homeworks', rowAssigned: 'User Four'}
    ])

    const [showAddTodoForm, setShowAddTodoForm] = useState(false)

    const addTodo = (description: string, assigned: string) => {
        let rowNumber = 0
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1
        } else {
            rowNumber = 1
        }
        const newTodo = {
            rowNumber: rowNumber,
            rowDesc: description,
            rowAssigned: assigned
        }
        setTodos(todos => [...todos, newTodo])
    }

    const deleteTodo = (deleteTodoRowNumber) => {
        let filtered = todos.filter(function (value) {
            return value.rowNumber !== deleteTodoRowNumber;
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

export default App;
