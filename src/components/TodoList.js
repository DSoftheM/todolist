import Deals from "./Deals/Deals";
import TodoInput from "./TodoInput/TodoInput";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

function TodoList() {
    return (
        <>
             <TodoListHeader
                dealsCount={12}
            />
            <TodoInput/>
            <Deals/>
        </>
    )
}

export default TodoList;