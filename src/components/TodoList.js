import { useState } from "react";
import Deals from "./Deals/Deals";
import TodoInput from "./TodoInput/TodoInput";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

function TodoList() {
    const localStorageDeals = localStorage.getItem('deals');
    let initDeals = [];
    if (localStorageDeals)
        initDeals = localStorageDeals.split(',');

    let [deals, setDeals] = useState([...initDeals]);
    let [doneDeals, setDoneDeals] = useState(['done1', 'done2']);


    return (
        <>
            <TodoListHeader
                dealsCount={deals.length}
            />
            <TodoInput 
                deals={deals} 
                setDeals={setDeals}
            />
            <Deals 
                dealsName={DealNames.uncompleted}
                deals={deals}
                setDeals={setDeals}
                doneDeals={doneDeals}
                setDoneDeals={setDoneDeals}
            />
        </>
    )
}

export const DealNames = {
    done: "done",
    uncompleted: "uncompleted",
}

export default TodoList;