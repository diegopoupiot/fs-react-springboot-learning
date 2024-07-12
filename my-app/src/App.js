import TodoRowItem from './components/TodoRowItem';

function App() {
    return (
        <div className="min-h-screen bg-zinc-800 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="text-xl font-semibold mb-4">
                    Your To do's
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-zinc-200">
                        <thead className="bg-zinc-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                Assigned
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-zinc-200">
                        <TodoRowItem />
                        <TodoRowItem />
                        <TodoRowItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
