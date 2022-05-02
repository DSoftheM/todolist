import { useState } from "react";
import Deals from "./Deals/Deals";
import TodoInput from "./TodoInput/TodoInput";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

function TodoList() {
    // debugger
    const localStorageDeals = localStorage.getItem('deals');
    let initDeals = [];
    let dealsCount = 0;
    if (localStorageDeals) {
        initDeals = localStorageDeals.split(',');
        dealsCount = initDeals.length;
    }

    let [deals, setDeals] = useState([...initDeals]);
    // debugger
    let [doneDeals, setDoneDeals] = useState([]);


    return (
        <>
            <TodoListHeader
                dealsCount={dealsCount}
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