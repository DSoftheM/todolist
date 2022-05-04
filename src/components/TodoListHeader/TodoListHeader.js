import { useEffect } from 'react';
import './TodoListHeader.css';

function TodoListHeader({count}) {


    

    return (
        <div className='todolist__header header-todolist'>
            <div className='header-todolist__name'>TodoList</div>
            <div className='header-todolist__deals'>
                Deals:
                <span onAnimationEnd={(e) => dealsCountOnAnimationEnd(e)}>{count}</span>
            </div>
        </div>
    )
}

function dealsCountOnAnimationEnd(event) {
    const dealsCount = event.target;
    dealsCount.style.animationName = '';
}

export default TodoListHeader; 