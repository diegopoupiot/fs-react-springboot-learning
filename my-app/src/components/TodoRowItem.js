function TodoRowItem(props) {

    return (
        <tr>
            <th scope={'row'} className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.rowNumber}</th>
            <td className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.rowDesc}</td>
            <td className={'px-6 py-4 whitespace-nowrap text-sm text-zinc-900'}>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem;