import './TodoListHeader.css';

function TodoListHeader({count}) {
    return (
        <div className='todolist__header header-todolist'>
            <div className='header-todolist__name'>TodoList</div>
            <div className='header-todolist__deals'>
                Deals:
                <span>{count}</span>
            </div>
        </div>
    )
}

export default TodoListHeader; 