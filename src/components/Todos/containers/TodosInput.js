const TodosInput = ({todo, setTodo, addTodo}) => {
    return(
        <div className="wrapper">
            <h1>Your todo</h1>
            <div className="input_wrapper">
                <input type="text"
                       name="todo"
                       value={todo}
                       placeholder="create a new todo"
                       onChange={(e) => {
                           setTodo(e.target.value);
                       }}
                />
                <button onClick={addTodo} className="button">Add</button>
            </div>
        </div>
    )
}
export default TodosInput;