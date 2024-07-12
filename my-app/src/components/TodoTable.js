import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
    return (
        <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-50">
            <tr>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    #
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Description
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Assigned
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-200">
            {props.todos.map(todo => (
                <TodoRowItem rowNumber={todo.rowNumber}
                             rowDesc={todo.rowDesc}
                             rowAssigned={todo.rowAssigned}
                />
            ))}
            </tbody>
        </table>
    )
}

export default TodoTable