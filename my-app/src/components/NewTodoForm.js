import React, {useState} from 'react';

function NewTodoForm(props) {

    const [assigned, setAssigned] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (assigned !== '' && description !== '') {
            props.addTodo(description, assigned);
            console.log('submitted todo with assigned:', assigned, 'and description:', description);
            setAssigned('');
            setDescription('');
        }
    };

    return (
        <div className="mt-5">
            <form className="flex justify-start" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                    <div className="mb-3">
                        <label htmlFor="assigned" className="block text-sm font-medium text-gray-700">Assigned</label>
                        <input
                            id="assigned"
                            name="assigned"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            type="text"
                            placeholder="Assigned"
                            onChange={e => setAssigned(e.target.value)}
                            value={assigned}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description"
                               className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows={3}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            placeholder="Description"
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewTodoForm;