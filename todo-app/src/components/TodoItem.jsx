import "./TodoItem.css"

function TodoItem({ todo, updateTodod, deleteTodo}){
    return(
        <>
            <div className={`todo-item ${todo.completed ? "completed": ""}`}>
                <input 
                type="checkbox"
                checked= {todo.completed} 
                onChange={()=> updateTodod(todo.id, todo.completed)}/>

                <span>{todo.title}</span>

                <button onClick={()=> deleteTodo(todo.id)}> Delete</button>
            </div>
        </>
    );
}

export default TodoItem