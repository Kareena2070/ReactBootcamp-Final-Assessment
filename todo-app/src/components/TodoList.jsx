import './TodoList.css'
import TodoItem from "./TodoItem";

function TodoList({ title, todos, updateTodo, deleteTodo }) {

    return (
        <>
            <div className="todoList">
                <h2>{title}{" "} {todos.length}</h2>

                {todos.length === 0 && <p>No todos are here......</p>}

                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo} />
                ))}
            </div>
        </>
    );
}

export default TodoList