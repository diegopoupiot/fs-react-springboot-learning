import React from "react";

export const TodoRowItem: React.FC<{
    id: number,
    description: string,
    assigned: string,
    deleteTodo: Function
}> = (props) => {

    return (
        <tr className={"cursor-pointer hover:bg-zinc-100 transition duration-300 hover:transform"}
            onClick={() => props.deleteTodo(props.id)}>
            <th scope={'row'} className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.id}</th>
            <td className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.description}</td>
            <td className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.assigned}</td>
        </tr>
    )
}