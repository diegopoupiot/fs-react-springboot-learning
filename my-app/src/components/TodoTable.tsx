import React from "react";
import {TodoModel} from "../classes/TodoModel";
import {TodoRowItem} from "./TodoRowItem";

export const TodoTable: React.FC<{ todos: TodoModel[], deleteTodo: Function }> = (props) => {
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
            {props.todos.map((todo) => (
                <TodoRowItem
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    assigned={todo.assigned}
                    deleteTodo={props.deleteTodo}
                />
            ))}
            </tbody>
        </table>
    )
}