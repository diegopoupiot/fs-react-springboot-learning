import {useState} from 'react';
import TodoTable from "./components/TodoTable";

function App() {

    const [todos, setTodos] = useState([
        {rowNumber: 1, rowDesc: 'Feed puppy', rowAssigned: 'User One'},
        {rowNumber: 2, rowDesc: 'Water plants', rowAssigned: 'User Two'},
        {rowNumber: 3, rowDesc: 'Make dinner', rowAssigned: 'User One'},
        {rowNumber: 4, rowDesc: 'Do homeworks', rowAssigned: 'User Four'},
    ])

    const addTodo = () => {
        if (todos.length > 0) {
            const newTodo = {
                rowNumber: todos[todos.length - 1].rowNumber + 1,
                rowDesc: 'New task',
                rowAssigned: 'User Five'
            }
            setTodos([...todos, newTodo])
            console.log(todos)
        }
    }

    return (
        <div className="min-h-screen bg-zinc-800 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="text-xl font-semibold mb-4">
                    To-do List
                </div>
                <div className="overflow-x-auto">
                    <TodoTable todos={todos}/>
                    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                            onClick={addTodo}>Button
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
