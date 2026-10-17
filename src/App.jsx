function App(props) {
    return (
        <div className="todo app">
            <h1>FSAD To Do App</h1>
            <form>
                <input 
                    type="submit"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    placeholder="Enter a to-do..."
                />
            </form>
            <ul 
                className="todo-list stack-large"
                role="list"
                aria-labelledby="list-heading"
            >
                <li className="todo-stack-small">
                    <div className="c-cb">
                        <input id="todo-0" type="checkbox" defaultChecked />
                        <label className="todo-label" htmlFor="todo-0">
                            Master React
                        </label>
                    </div>
                </li>

            </ul>
        </div>
    )
}