function TodoRowItem(props) {

    return (
        <tr className={"cursor-pointer hover:bg-zinc-100 transition duration-300 hover:transform"}
            onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope={'row'} className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.rowNumber}</th>
            <td className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.rowDesc}</td>
            <td className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem;