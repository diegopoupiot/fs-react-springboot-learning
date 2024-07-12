import TodoRowItem from './components/TodoRowItem';
import TodoTable from "./components/TodoTable";

function App() {

    const todos = [
        {rowNumber: 1, rowDesc: 'Feed puppy', rowAssigned: 'User One'},
        {rowNumber: 2, rowDesc: 'Water plants', rowAssigned: 'User Two'},
        {rowNumber: 3, rowDesc: 'Make dinner', rowAssigned: 'User One'},
        {rowNumber: 4, rowDesc: 'Do homeworks', rowAssigned: 'User Four'},
    ]

    return (
        <div className="min-h-screen bg-zinc-800 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="text-xl font-semibold mb-4">
                    To-do List
                </div>
                <div className="overflow-x-auto">
                    <TodoTable todos={todos}/>
                    <button></button>
                </div>
            </div>
        </div>
    );
}

export default App;
