import './TodoListHeader.css';

function TodoListHeader({dealsCount}) {
    return (
        <div className='todolist__header header-todolist'>
            <div className='header-todolist__name'>TodoList</div>
            <div className='header-todolist__deals'>
                Deals: 
                <span>{dealsCount}</span>
            </div>
        </div>
    )
}

export default TodoListHeader; 