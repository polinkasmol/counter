import TodosInput from "../../containers/TodosInput";
import TodosList from "../../containers/TodosList";
import "./styles.modules.css"
import {useState} from "react";
import PropTypes from "prop-types";
const TodosApp = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")
    const addTodo = () => {
        if (todo !== ""){
            setTodos([...todos, todo])
            setTodo("")
        }
    }

    const deleteTodo = (todoName) => {
        const newTodos = todos.filter((todo) => {
            return todo !== todoName
        })
        setTodos(newTodos)
    }

    return (
        <div className="App">
            <TodosInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <TodosList list={todos} remove={deleteTodo}/>
        </div>
    )

}
TodosApp.propTypes = {
    todo: PropTypes.string.isRequired,
    setTodo: PropTypes.func.isRequired,
}
export default TodosApp;